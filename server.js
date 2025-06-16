const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Set up multer to handle multipart/form-data
const upload = multer();

// Middleware
app.use(express.static('public')); // your HTML form should be in "public" folder
app.use(upload.none()); // parses multipart/form-data (from FormData)

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahetexam@gmail.com',
            pass: 'lpxs emge kpde fwqo',
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'ahetexam@gmail.com',
        subject: `New message from ${name}`,
        html: `
            <h2>📩 New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.send('error');
        } else {
            console.log('Email sent:', info.response);
            res.send('success');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
