const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'popvibes.net@gmail.com', 
        pass: 'gejl hpdl ergo qsdx' 
    },
});

const sendEmail = (mailOptions, callback) => {
    transporter.sendMail(mailOptions, callback);
};

module.exports = { sendEmail };