import { ContactSubmission, CandidateSubmission } from "./email";

const WEBHOOKY_URL = "https://webhookreceiver-ps6nryst2a-ey.a.run.app/R0G1lH56fdj4SbEttYFWKNcHavnneLhB";

export async function sendContactWebhook(submission: ContactSubmission) {
  if (!process.env.WEBHOOKY_ENABLED || process.env.WEBHOOKY_ENABLED === "true") {
    try {
      const response = await fetch(WEBHOOKY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact_submission",
          timestamp: new Date().toISOString(),
          data: {
            name: submission.contactName,
            company: submission.companyName || null,
            email: submission.email,
            phone: submission.phone,
            city: submission.city,
            industry: submission.industry || null,
            message: submission.message,
            adminUrl: "https://www.thehammittgroup.com/admin/contacts",
          },
        }),
      });

      if (!response.ok) {
        console.error("Webhook notification failed:", response.statusText);
        return { success: false, error: response.statusText };
      }

      return { success: true };
    } catch (error: any) {
      console.error("Error sending webhook notification:", error);
      return { success: false, error: error.message || "Failed to send webhook" };
    }
  }

  return { success: false, error: "Webhooks disabled" };
}

export async function sendCandidateWebhook(submission: CandidateSubmission) {
  if (!process.env.WEBHOOKY_ENABLED || process.env.WEBHOOKY_ENABLED === "true") {
    try {
      const response = await fetch(WEBHOOKY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "candidate_submission",
          timestamp: new Date().toISOString(),
          data: {
            name: `${submission.firstName} ${submission.lastName}`,
            email: submission.email,
            phone: submission.phone,
            currentLocation: submission.currentLocation,
            desiredLocation: submission.desiredLocation,
            industry: submission.industry,
            positionType: submission.positionType,
            coverLetter: submission.coverLetter || null,
            resumeUrl: submission.resumeUrl 
              ? `https://www.thehammittgroup.com${submission.resumeUrl}` 
              : null,
            adminUrl: "https://www.thehammittgroup.com/admin/submissions",
          },
        }),
      });

      if (!response.ok) {
        console.error("Webhook notification failed:", response.statusText);
        return { success: false, error: response.statusText };
      }

      return { success: true };
    } catch (error: any) {
      console.error("Error sending webhook notification:", error);
      return { success: false, error: error.message || "Failed to send webhook" };
    }
  }

  return { success: false, error: "Webhooks disabled" };
}

