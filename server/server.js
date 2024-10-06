// server.js

const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;

const app = express();
const IP_LOG_FILE = 'ip_log.txt';

// app.set('trust proxy', true);

app.get('/track-visitor', (req, res) => {
  // Get the client IP address
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${ip}\n`;

  // Append the IP address to a log file
  fs.appendFile(IP_LOG_FILE, logEntry, (err) => {
    if (err) {
      console.error('Error writing to IP log file:', err);
    } else {
      console.log('Logged IP:', ip);
    }
  });

  res.status(200).send('Visitor tracked');
});

// Schedule the email to be sent at 6:00 PM every day
cron.schedule('0 18 * * *', () => {
  console.log('Cron job triggered at', new Date().toISOString());

  fs.readFile(IP_LOG_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading IP log file:', err);
      return;
    }

    // Send the email with the collected IP addresses
    sendEmail(data);

    // Clear the log file after sending the email
    fs.writeFile(IP_LOG_FILE, '', (err) => {
      if (err) {
        console.error('Error clearing IP log file:', err);
      } else {
        console.log('IP log file cleared');
      }
    });
  });
});

// Function to send the email
function sendEmail(ipData) {
  // Configure the email transport using SMTP
  let transporter = nodemailer.createTransport({
    service: 'iCloud', // email service provider
    auth: {
      user: emailUser, // Use variable
      pass: emailPass, // Use variable
    },
  });

  let mailOptions = {
    from: emailUser,
    to: emailTo, // Use variable
    subject: 'Daily Visitor IP Addresses',
    text: ipData || 'No visitors today.',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Test route to send an email manually
app.get('/test-email', (req, res) => {
  sendEmail('This is a test email from your server.');
  res.send('Test email initiated.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
