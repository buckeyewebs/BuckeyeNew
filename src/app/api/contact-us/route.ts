import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const { fullName, email, companyName, industry, message } = await req.json(); // Parse the request body

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail user
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Mail options
    const mailOptions = {
      from: '"Your Name" <Buckeyewebsinfo@gmail.com>',
      to: "Buckeyewebsinfo@gmail.com",
      subject: "Business Information",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Here is the business information:</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
