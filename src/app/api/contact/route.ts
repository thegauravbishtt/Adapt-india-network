import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      countryCode = "+91",
      companyName,
      service,
      budget,
      requirement,
    } = body;

    // 1. Basic validation
    if (!name || !email || !phone || !companyName || !requirement) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.EMAIL_TO || "owlioworks@gmail.com";
    const senderUser = process.env.EMAIL_USER || "owlioworks@gmail.com";
    const senderPass = process.env.EMAIL_PASS;

    // Clean phone number for WhatsApp link (strip spaces, dashes, plus)
    const rawDigits = phone.replace(/\D/g, "");
    const codeDigits = countryCode.replace(/\D/g, "");
    const fullPhoneFormatted = `${countryCode} ${phone.trim()}`;
    const whatsappNumber = `${codeDigits}${rawDigits}`;

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // 2. Prepare HTML Email template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Brief - Owlio Works</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #18181b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 32px 12px;">
          <tr>
            <td align="center">
              <table width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                
                <!-- HEADER -->
                <tr>
                  <td style="background-color: #0c0c0e; padding: 28px 32px; border-bottom: 3px solid #fbea3d;">
                    <table width="100%">
                      <tr>
                        <td>
                          <div style="font-size: 11px; font-weight: 800; color: #fbea3d; letter-spacing: 2px; text-transform: uppercase; font-family: monospace; margin-bottom: 6px;">
                            // NEW CLIENT INQUIRY
                          </div>
                          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">
                            OWLIO WORKS
                          </h1>
                        </td>
                        <td align="right">
                          <span style="background-color: rgba(251, 234, 61, 0.15); color: #fbea3d; border: 1px solid rgba(251, 234, 61, 0.3); padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; font-family: monospace;">
                            Contact Form
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- BODY -->
                <tr>
                  <td style="padding: 32px;">
                    
                    <p style="margin: 0 0 20px 0; font-size: 15px; color: #52525b; line-height: 1.5;">
                      A new project brief was submitted on <strong style="color: #18181b;">owlioworks.com</strong>. Here are the full submission details:
                    </p>

                    <!-- CLIENT DETAILS CARD -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 12px; margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 18px 20px;">
                          
                          <!-- Name -->
                          <div style="margin-bottom: 12px;">
                            <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Client Name</span>
                            <span style="font-size: 16px; font-weight: 800; color: #18181b;">${escapeHtml(name)}</span>
                          </div>

                          <!-- Company -->
                          <div style="margin-bottom: 12px;">
                            <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Company</span>
                            <span style="font-size: 15px; font-weight: 600; color: #18181b;">${escapeHtml(companyName)}</span>
                          </div>

                          <!-- Email -->
                          <div style="margin-bottom: 12px;">
                            <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Email Address</span>
                            <a href="mailto:${encodeURIComponent(email)}" style="font-size: 14px; font-weight: 600; color: #2563eb; text-decoration: none;">
                              ${escapeHtml(email)}
                            </a>
                          </div>

                          <!-- Phone -->
                          <div style="margin-bottom: 12px;">
                            <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Phone Number</span>
                            <span style="font-size: 14px; font-weight: 600; color: #18181b;">
                              <a href="tel:${encodeURIComponent(fullPhoneFormatted)}" style="color: #18181b; text-decoration: none;">
                                ${escapeHtml(fullPhoneFormatted)}
                              </a>
                            </span>
                          </div>

                          <!-- Service & Budget -->
                          <table width="100%" style="border-top: 1px dashed #e4e4e7; padding-top: 12px; margin-top: 12px;">
                            <tr>
                              <td width="50%" style="vertical-align: top;">
                                <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Service Interested In</span>
                                <span style="font-size: 14px; font-weight: 700; color: #09090b;">${escapeHtml(service || "Not specified")}</span>
                              </td>
                              <td width="50%" style="vertical-align: top;">
                                <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; letter-spacing: 0.5px;">Estimated Budget</span>
                                <span style="font-size: 14px; font-weight: 700; color: #15803d; background-color: #dcfce7; padding: 2px 8px; border-radius: 6px; display: inline-block;">
                                  ${escapeHtml(budget || "Not specified")}
                                </span>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>
                    </table>

                    <!-- PROJECT REQUIREMENT -->
                    <div style="margin-bottom: 24px;">
                      <span style="display: block; font-size: 12px; font-weight: 800; text-transform: uppercase; color: #18181b; letter-spacing: 0.5px; margin-bottom: 8px;">
                        Project Requirement &amp; Brief:
                      </span>
                      <div style="background-color: #faf7ee; border-left: 4px solid #fbea3d; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(requirement)}
                      </div>
                    </div>

                    <!-- ACTION BUTTONS -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px; margin-bottom: 12px;">
                      <tr>
                        <td align="center" style="padding-right: 6px;">
                          <a href="mailto:${encodeURIComponent(email)}?subject=Re:%20Owlio%20Works%20-%20Project%20Inquiry%20(${encodeURIComponent(companyName)})" style="display: block; text-align: center; background-color: #18181b; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.3px;">
                            ✉ Reply via Email
                          </a>
                        </td>
                        <td align="center" style="padding-left: 6px;">
                          <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${name}, thank you for reaching out to Owlio Works regarding your ${service || 'project'} requirements.`)}" style="display: block; text-align: center; background-color: #22c55e; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.3px;">
                            💬 WhatsApp Client
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="background-color: #f4f4f5; padding: 18px 32px; border-top: 1px solid #e4e4e7; font-size: 11px; color: #71717a; text-align: center;">
                    Received on: <strong>${submissionTime}</strong><br />
                    Owlio Works Contact Notification Service · Saket, New Delhi
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;

    const plainTextContent = `
NEW PROJECT BRIEF - OWLIO WORKS
========================================

Time: ${submissionTime}

CLIENT DETAILS:
- Name: ${name}
- Company: ${companyName}
- Email: ${email}
- Phone: ${fullPhoneFormatted}
- Service: ${service || "Not specified"}
- Budget: ${budget || "Not specified"}

PROJECT REQUIREMENT:
----------------------------------------
${requirement}
----------------------------------------
    `;

    // 3. Dispatch Email via Nodemailer if credentials exist
    const cleanPass = senderPass ? senderPass.replace(/[\s"']/g, "").trim() : "";
    const cleanUser = senderUser ? senderUser.trim() : "owlioworks@gmail.com";

    if (cleanPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: cleanUser,
          pass: cleanPass,
        },
      });

      await transporter.sendMail({
        from: `"Owlio Works Website" <${cleanUser}>`,
        to: destinationEmail,
        replyTo: `"${name}" <${email}>`,
        subject: `🔥 New Lead: ${name} (${companyName}) - ${service || "Project Inquiry"}`,
        text: plainTextContent,
        html: htmlContent,
      });

      console.log(`[Contact API] Email successfully sent to ${destinationEmail}`);
    } else {
      console.warn(
        `[Contact API] Notice: EMAIL_PASS is not set in .env.local. Brief details logged below for development:`
      );
      console.log(plainTextContent);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to process your request. Please try again or reach out directly at owlioworks@gmail.com",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
