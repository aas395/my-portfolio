import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { sendEmail } from "@/lib/email";

const postHandler = async (req: NextRequest) => {
  const jsonBody = await req.json();

  const { data } = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: jsonBody.token,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (data.success) {
    await sendEmail({
      to: "aas395@gmail.com",
      subject: jsonBody.subject,
      html: `<html>
      <body>
        <p>From: ${jsonBody.name}</p>
        <p>Email: ${jsonBody.email}</p>
        <p>Message: ${jsonBody.body}</p>
      </body>
      `,
    });
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 400 }
    );
  }
};

export { postHandler as POST };
