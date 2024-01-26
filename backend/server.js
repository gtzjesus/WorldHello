import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

// Code logic for the Middleware to parse JSON
app.use(bodyParser.json());

// Code logic endpoint to handle form submissions
app.post('/api/sendEmail', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      website,
      companyName,
      howCanWeHelp,
      howDidYouHear,
    } = req.body;

    // Code logic to create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Your email service SMTP settings
      service: 'outlook',
      auth: {
        user: 'gtz.jesus@outlook.com',
        password: 'React!584911',
      },
    });

    // Email content
    const mailOptions = {
      from: 'gtz.jesus@outlook.com',
      to: 'recipient',
      subject: 'WorldHello New Contact Form Submission',
      html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Website: ${website}</p>
            <p>Company Name: ${companyName}</p>
            <p>How can we help: ${howCanWeHelp}</p>
            <p>How did you hear: ${howDidYouHear}</p>
            `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
