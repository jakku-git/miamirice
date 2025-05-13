import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',  // or your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, subject, message } = data

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}

This message was submitted through the website contact form.
    `

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@miamirice.com.au',
      subject: `New Contact Form Submission - ${subject}`,
      text: emailContent,
      replyTo: email, // This allows you to reply directly to the customer
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send contact email' },
      { status: 500 }
    )
  }
} 