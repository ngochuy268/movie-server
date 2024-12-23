const { sendEmail } = require('../models/emailModel');

const contact = (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'popvibes.net@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    sendEmail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send message' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Message sent successfully' });
    });
};

module.exports = { contact };
