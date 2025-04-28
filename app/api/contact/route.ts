import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { name, phone, email, message } = await req.json();

    const templateUrl = "/templates/contact.html";
    const templatePath = path.join(process.cwd(), templateUrl);
    const template = fs.readFileSync(templatePath, "utf8");

    let emailBody = template.replace("{{name}}", name);
    emailBody = emailBody.replace("{{phone}}", phone);
    emailBody = emailBody.replace("{{email}}", email);
    emailBody = emailBody.replace("{{message}}", message);

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail", // o cualquier otro servicio
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: "Mensaje de pamva",
        html: emailBody,
    };

    try {
        await transporter.sendMail(mailOptions);

        return NextResponse.json("Email sent successfully", { status: 200 });
    } catch (error) {
        console.error("Error enviando la invitación:", error);
        return NextResponse.json("Error sending email", { status: 200 });
    }
};
