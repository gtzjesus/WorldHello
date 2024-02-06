// TODO:Imports error
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

// Code logic for the Middleware to parse JSON data sent in the POST request
app.use(bodyParser.json());

// Configure server to serve static files
app.use(express.static('public'));

// Handle root route
app.get('/', (req, res) => {
  res.send('WorldHello!');
});

// Allowed origins to access your server
app.use(
  cors({
    origin: 'http://worldhello.us',
  })
);

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

    console.log('Request Body:', req.body); // Log the request body for debugging

    // Create a nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Outlook SMTP server
      port: 587, // Outlook SMTP port
      secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
      auth: {
        user: 'gtz.jesus@outlook.com',
        pass: 'mjesccccultmcjzs',
      },
    });

    // Email content
    const mailOptions = {
      from: 'gtz.jesus@outlook.com',
      to: 'gtz.jesus@outlook.com',
      subject: 'WorldHello New Lead',
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

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
