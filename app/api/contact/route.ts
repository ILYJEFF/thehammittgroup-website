import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { sendContactNotification } from "@/lib/email";
import { sendContactWebhook } from "@/lib/webhook";

const contactSchema = z.object({
  companyName: z.string().optional(),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  city: z.string().min(2, "City is required"),
  industry: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const contact = await prisma.contact.create({
      data: validatedData,
    });

    // Send webhook notification (don't fail if webhook fails)
    try {
      await sendContactWebhook(validatedData);
    } catch (webhookError) {
      console.error("Failed to send webhook notification:", webhookError);
      // Continue even if webhook fails - submission is still saved
    }

    // Send email notification (don't fail if email fails)
    try {
      await sendContactNotification(validatedData);
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Continue even if email fails - submission is still saved
    }

    return NextResponse.json(
      { success: true, id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Contact form validation error:", error.errors);
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation error",
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }

    console.error("Contact submission error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Internal server error" 
      },
      { status: 500 }
    );
  }
}

