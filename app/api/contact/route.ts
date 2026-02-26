import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL;

function convertTo24Hour(time: string) {
  if (!time) return "";

  const [hourMin, modifier] = time.split(" ");
  let [hours, minutes] = hourMin.split(":");
  let hoursNumber = Number.parseInt(hours, 10);

  if (modifier === "PM" && hoursNumber !== 12) {
    hoursNumber += 12;
  }
  if (modifier === "AM" && hoursNumber === 12) {
    hoursNumber = 0;
  }

  hours = String(hoursNumber).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, preferredTime, message, date } = body;

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!resendApiKey || !adminEmail) {
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-PK", {
          timeZone: "Asia/Karachi",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "N/A";

    const formattedTime = preferredTime
      ? new Date(`1970-01-01T${convertTo24Hour(preferredTime)}:00`).toLocaleTimeString(
          "en-PK",
          {
            timeZone: "Asia/Karachi",
            hour: "2-digit",
            minute: "2-digit",
          },
        )
      : "N/A";

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: adminEmail,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Preferred Date:</strong> ${formattedDate}</p>
        <p><strong>Preferred Time (PKT):</strong> ${formattedTime}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}
