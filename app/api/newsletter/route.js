import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'propvator.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@propvator.com',
      pass: 'WGUQXc4bxmwMCDB',
    },
})

export async function POST(request) {
    const body = await request.json();

    const mailOptions = {
        from: 'info@propvator.com',
        to: 'info@propvator.com',
        subject: 'New Subscriber',
        text: `New subscriber email: ${body.email}`
      }

    transporter.sendMail(mailOptions, function(error, info){
        // if (error) {
        //     console.log(error);
        // } else {
        //     console.log('Email sent: ' + info.response);
        // }
    });
  
    return NextResponse.json({ success: true }, { status: 200 });
}