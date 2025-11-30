import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // For now, we'll just log the subscription
    // You can integrate with:
    // - Mailchimp API
    // - ConvertKit API
    // - Resend Contacts API
    // - Your own database

    console.log("Newsletter subscription:", email);

    // Example: Add to Resend contacts (if using Resend)
    if (resend && process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        });
      } catch (error) {
        console.error("Error adding to Resend:", error);
        // Continue even if Resend fails
      }
    }

    // TODO: Add to your database if you want to track subscriptions
    // await prisma.newsletterSubscription.create({ data: { email } });

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

