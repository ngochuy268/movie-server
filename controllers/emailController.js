const { sendEmail } = require('../models/emailModel');
const axios = require('axios');

const contact = async (req, res) => {
    const { name, email, subject, message, captcha } = req.body;

    const secretKey = '6LefuK4qAAAAACRcqvDNeBWpbolAJPO3PatKFiz_';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

    try {
        const captchaResponse = await axios.post(verifyUrl);
        if (!captchaResponse.data.success) {
            return res.status(400).json({ error: 'CAPTCHA verification failed' });
        }

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
    } catch (error) {
        console.error('Error verifying CAPTCHA:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { contact };
