import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const { email, businessName, contactName,
      emailnew, services,
      projectDescription,
      budgetRange,
      preferredTimeline,
      projectDuration } = await req.json(); // Parse the request body

    // Validate input
    if (!email || !businessName) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
      });
    }

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
      from: '"Your Name" <fatimaabbasi270@gmail.com>',
      to: email,
      subject: "Business Information",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Here is the business information:</h2>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Contact Email:</strong> ${emailnew}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Project Description:</strong></p>
          <p>${projectDescription}</p>
          <p><strong>Budget Range:</strong>$ ${budgetRange}</p>
          <p><strong>Preferred Timeline:</strong> ${preferredTimeline}</p>
          <p><strong>Project Duration:</strong> ${projectDuration} months</p>
        </div>
      `,
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
};
