const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs')
const path = require('path')

const setupHandlebars = async () => {
  const hbsModule = await import('nodemailer-express-handlebars');
  transporter.use('compile', hbsModule.default({
    viewEngine: {
      extname: '.hbs',
      partialsDir: path.resolve('./templates/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./templates/'),
    extName: '.hbs',
  }));
};

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//  const htmlTemplate = fs.readFileSync('./templates/email-template.html', 'utf-8');
 
 const sendEmail = async (to, name) => {

  //  let htmlContent = htmlTemplate.replace("{{name}}", name);

  // const ejsTemplate = await ejs.renderFile('./templates/email-template.ejs', { name });

  await setupHandlebars(); 
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Register successfully!',

    // for html template 
    // html:htmlContent,

    // for ejs template
    // html:ejsTemplate,

    // for hbs template 
    template: 'email-template',
    context: { name },

    attachments: [
      {
        filename: 'logo.png',
        path: './images/logo.png',
        cid: 'logo',
        contentDisposition : 'inline'
      },
      {
        filename: 'fb.png',
        path: './images/fb.png',
        cid: 'fb',
        contentDisposition : 'inline'
      },
      {
        filename: 'x.png',
        path: './images/x.png',
        cid: 'x',
        contentDisposition : 'inline'
      },
      {
        filename: 'class.pdf',
        path: './images/class.pdf',
        cid: 'class',
      }
    ]};
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
