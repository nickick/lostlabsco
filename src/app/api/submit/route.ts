import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.LOST_LABS_MAILER_KEY,
  },
});

export const POST = async (request: NextRequest) => {
  try {
    const { image, email, name } = await request.json();

    if (!image) {
      return NextResponse.json({ message: "Image is required" });
    }

    if (image.indexOf("base64") === -1) {
      return NextResponse.json({ message: "Invalid image" });
    }

    if (!email || !name) {
      return NextResponse.json({ message: "Email and name are required" });
    }

    await transporter
      .sendMail({
        from: `"nick@yesand.tech" <nick+logosubmissions@yesand.tech>`,
        to: "nick+logosubmissions@yesand.tech", // list of receivers
        subject: "New submission from " + name, // Subject
        text: "New submission from " + email, // plain text body
        attachments: [
          {
            filename: "submission.png",
            content: image.split("base64,")[1],
            encoding: "base64",
          },
        ],
      })
      .catch((error) => {
        throw new Error(error);
      });
    return NextResponse.json({ message: "Image received" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error submitting image" });
  }
};
