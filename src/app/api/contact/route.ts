import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, asset, city, details } = data;

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { message: 'Name, email, and inquiry details are required.' },
        { status: 400 }
      );
    }

    // Configure the Nodemailer transporter for Google Workspace (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `NEW XitSource Inquiry: ${name}`,
      text: `
        You have received a new confidential inquiry.

        Name: ${name}
        Phone: ${phone || 'Not provided'}
        Email: ${email}
        Asset Category: ${asset || 'Not provided'}
        City/Location: ${city || 'Not provided'}

        Inquiry Details:
        ${details}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 4px;">
          <h2 style="color: #111827; margin-bottom: 24px;">New Confidential Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 140px;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Asset Category:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${asset || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">City/Location:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${city || 'Not provided'}</td>
            </tr>
          </table>

          <h3 style="color: #374151; font-size: 16px; margin-bottom: 8px;">Inquiry Details:</h3>
          <p style="background-color: #f9fafb; padding: 16px; border-left: 4px solid #52D017; color: #111827; line-height: 1.6; white-space: pre-wrap;">${details}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Inquiry successfully verified and sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { message: 'Error establishing secure connection. Please try again later.' },
      { status: 500 }
    );
  }
}
