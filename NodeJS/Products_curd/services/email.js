const nodemailer = require('nodemailer');
const fs = require('fs')
const path = require('path')
const logoPath = path.join(__dirname, '..', 'images', 'logo.png');
const fbPath = path.join(__dirname, '..', 'images', 'fb.png');
const xPath = path.join(__dirname, '..', 'images', 'x.png');
const classPath = path.join(__dirname, '..', 'images', 'class.pdf');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

 const htmlTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'email-template.html'), 'utf-8');
 const sendEmail = async (to, subject, text) => {
  let htmlContent = htmlTemplate.replace("{{text}}", text);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
     html:htmlContent,
   attachments: [
    {
      filename: 'logo.png',
      path: logoPath,
      cid: 'logo',
      contentDisposition : 'inline'
    },
    {
      filename: 'fb.png',
      path: fbPath,
      cid: 'fb',
      contentDisposition : 'inline'
    },
    {
      filename: 'x.png',
      path: xPath,
      cid: 'x',
      contentDisposition : 'inline'
    },
    {
      filename: 'class.pdf',
      path: classPath,
      cid: 'class',
    }
  ]
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
