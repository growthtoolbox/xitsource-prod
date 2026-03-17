import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, firstName, lastName, email, phone, asset, city, details } = data;

    const fullName = firstName ? `${firstName} ${lastName || ''}` : name;
    
    // Check possible Vercel env variable names
    const smtpUser = process.env.SMTP_USER || process.env.SMTP_EMAIL || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.APP_PASSWORD || process.env.EMAIL_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials missing from environment variables.");
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: smtpUser, // Send to themselves (John & Ryan)
      subject: `NEW XitSource Inquiry: ${fullName}`,
      html: `
        <h2>New Inquiry from XitSource</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Asset Category:</strong> ${asset || 'N/A'}</p>
        <p><strong>City:</strong> ${city || 'N/A'}</p>
        <p><strong>Details:</strong><br/>${details}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
