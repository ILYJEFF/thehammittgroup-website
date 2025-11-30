import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export interface ContactSubmission {
  contactName: string;
  companyName?: string;
  email: string;
  phone: string;
  city: string;
  industry?: string;
  message: string;
}

export interface CandidateSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentLocation: string;
  desiredLocation: string;
  industry: string;
  positionType: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export async function sendContactNotification(submission: ContactSubmission) {
  if (!resend) {
    console.warn("RESEND_API_KEY not set. Email notification skipped.");
    return { success: false, error: "Email service not configured" };
  }

  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "jeff@thehammittgroup.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      subject: `New Contact Form Submission from ${submission.contactName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
              .value { color: #4b5563; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
              .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb; margin-top: 10px; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
              .button { display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${submission.contactName}</div>
                </div>
                
                ${submission.companyName ? `
                <div class="field">
                  <span class="label">Company:</span>
                  <div class="value">${submission.companyName}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${submission.email}">${submission.email}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${submission.phone}">${submission.phone}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">City:</span>
                  <div class="value">${submission.city}</div>
                </div>
                
                ${submission.industry ? `
                <div class="field">
                  <span class="label">Industry:</span>
                  <div class="value">${submission.industry}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">${submission.message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <a href="https://www.thehammittgroup.com/admin/contacts" class="button">
                  View in Admin Dashboard
                </a>
              </div>
              <div class="footer">
                <p>This is an automated notification from The Hammitt Group website.</p>
                <p>Submitted at ${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/Chicago',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${submission.contactName}
${submission.companyName ? `Company: ${submission.companyName}\n` : ''}
Email: ${submission.email}
Phone: ${submission.phone}
City: ${submission.city}
${submission.industry ? `Industry: ${submission.industry}\n` : ''}

Message:
${submission.message}

---
View in Admin Dashboard: https://www.thehammittgroup.com/admin/contacts
Submitted at ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Chicago',
  dateStyle: 'full',
  timeStyle: 'long'
})}
      `.trim(),
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (error: any) {
    console.error("Error sending contact notification email:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}

export async function sendCandidateNotification(submission: CandidateSubmission) {
  if (!resend) {
    console.warn("RESEND_API_KEY not set. Email notification skipped.");
    return { success: false, error: "Email service not configured" };
  }

  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "jeff@thehammittgroup.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      subject: `New Resume Submission from ${submission.firstName} ${submission.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
              .value { color: #4b5563; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
              .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb; margin-top: 10px; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
              .button { display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Resume Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${submission.firstName} ${submission.lastName}</div>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${submission.email}">${submission.email}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${submission.phone}">${submission.phone}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">Current Location:</span>
                  <div class="value">${submission.currentLocation}</div>
                </div>
                
                <div class="field">
                  <span class="label">Desired Location:</span>
                  <div class="value">${submission.desiredLocation}</div>
                </div>
                
                <div class="field">
                  <span class="label">Industry:</span>
                  <div class="value">${submission.industry}</div>
                </div>
                
                <div class="field">
                  <span class="label">Position Type:</span>
                  <div class="value">${submission.positionType}</div>
                </div>
                
                ${submission.coverLetter ? `
                <div class="field">
                  <span class="label">Cover Letter:</span>
                  <div class="message-box">${submission.coverLetter.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
                
                ${submission.resumeUrl ? `
                <div class="field">
                  <span class="label">Resume:</span>
                  <div class="value">
                    <a href="https://www.thehammittgroup.com${submission.resumeUrl}" target="_blank">
                      View Resume
                    </a>
                  </div>
                </div>
                ` : ''}
                
                <a href="https://www.thehammittgroup.com/admin/submissions" class="button">
                  View in Admin Dashboard
                </a>
              </div>
              <div class="footer">
                <p>This is an automated notification from The Hammitt Group website.</p>
                <p>Submitted at ${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/Chicago',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Resume Submission

Name: ${submission.firstName} ${submission.lastName}
Email: ${submission.email}
Phone: ${submission.phone}
Current Location: ${submission.currentLocation}
Desired Location: ${submission.desiredLocation}
Industry: ${submission.industry}
Position Type: ${submission.positionType}
${submission.coverLetter ? `Cover Letter:\n${submission.coverLetter}\n` : ''}
${submission.resumeUrl ? `Resume: https://www.thehammittgroup.com${submission.resumeUrl}\n` : ''}

---
View in Admin Dashboard: https://www.thehammittgroup.com/admin/submissions
Submitted at ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Chicago',
  dateStyle: 'full',
  timeStyle: 'long'
})}
      `.trim(),
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (error: any) {
    console.error("Error sending candidate notification email:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
