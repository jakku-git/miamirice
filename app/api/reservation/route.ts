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
    const { name, email, date, time, guests, message } = data

    // Format the email content
    const emailContent = `
New Reservation Request

Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}
Number of Guests: ${guests}
${message ? `Special Requests: ${message}` : ''}

This reservation request was submitted through the website.
    `

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@miamirice.com.au',
      subject: `New Reservation Request - ${name} - ${date} at ${time}`,
      text: emailContent,
      replyTo: email, // This allows you to reply directly to the customer
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send reservation email:', error)
    return NextResponse.json(
      { error: 'Failed to send reservation email' },
      { status: 500 }
    )
  }
} 