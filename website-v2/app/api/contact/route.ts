import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Email service not configured." }, { status: 503 });
    }
    const resend = new Resend(apiKey);

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["moshikoshiri03@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #f0f0f0; padding: 32px; border-radius: 8px; max-width: 600px;">
          <p style="color: #00c2ff; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 16px;">Portfolio Contact Form</p>
          <h2 style="color: #ffffff; margin: 0 0 24px; font-size: 20px;">${subject}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 80px;">From</td><td style="padding: 8px 0; color: #f0f0f0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0; color: #00c2ff;">${email}</td></tr>
          </table>
          <div style="background: #111; border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 20px; white-space: pre-wrap; color: #9ca3af; line-height: 1.6;">${message}</div>
          <p style="color: #2d3748; font-size: 10px; margin: 24px 0 0;">Sent from mosheshiri.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
