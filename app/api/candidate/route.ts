import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const currentLocation = formData.get("currentLocation") as string;
    const desiredLocation = formData.get("desiredLocation") as string;
    const industry = formData.get("industry") as string;
    const positionType = formData.get("positionType") as string;
    const coverLetter = formData.get("coverLetter") as string | null;
    const resumeFile = formData.get("resume") as File;

    if (!resumeFile) {
      return NextResponse.json(
        { success: false, error: "Resume is required" },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    if (resumeFile.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Resume file too large (max 10MB)" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { success: false, error: "Invalid file type. Only PDF, DOC, DOCX allowed." },
        { status: 400 }
      );
    }

    // Save file
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = join(process.cwd(), "public", "uploads", "resumes");
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const filePath = join(uploadsDir, fileName);
    await writeFile(filePath, buffer);

    const resumeUrl = `/uploads/resumes/${fileName}`;

    // Save to database
    const candidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        currentLocation,
        desiredLocation: desiredLocation as "DFW" | "Austin" | "Houston" | "San Antonio",
        industry,
        positionType,
        coverLetter: coverLetter || null,
        resumeUrl,
        status: "new",
      },
    });

    return NextResponse.json(
      { success: true, id: candidate.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Candidate submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

