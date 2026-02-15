
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

function convertTo24Hour(time) {
     if (!time) return "";

     const [hourMin, modifier] = time.split(" ");
     let [hours, minutes] = hourMin.split(":");

     hours = parseInt(hours, 10);

     if (modifier === "PM" && hours !== 12) {
          hours += 12;
     }
     if (modifier === "AM" && hours === 12) {
          hours = 0;
     }

     return `${String(hours).padStart(2, "0")}:${minutes}`;
}

app.post("/api/contact", async (req, res) => {
     try {
          const { name, email, company, projectType, preferredTime, message, date } = req.body;

          if (!name || !email || !projectType || !message) {
               return res.status(400).json({ error: "Missing required fields" });
          }

          // Convert to Pakistan Time
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
               ? new Date(`1970-01-01T${convertTo24Hour(preferredTime)}:00`)
                    .toLocaleTimeString("en-PK", {
                         timeZone: "Asia/Karachi",
                         hour: "2-digit",
                         minute: "2-digit",
                    })
               : "N/A";

          await resend.emails.send({
               from: "Portfolio Contact <onboarding@resend.dev>",
               to: process.env.ADMIN_EMAIL,
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

          res.json({ success: true });
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Email sending failed" });
     }
});

app.listen(process.env.PORT, () =>
     console.log(`Server running on port ${process.env.PORT}`)
);
