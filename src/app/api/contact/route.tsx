import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // if (process.env.GMAIL_USER || process.env.GMAIL_PASSWORD) {
    //   console.error('Missing Gmail credentials in .env.local');
    //   return NextResponse.json({ error: 'Internal server error. Email configuration is missing.' }, { status: 500 });
    // }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hydroleaf.ad@gmail.com', // Your Gmail email
        pass: 'wmzmobsmbhphdgmd', // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
