const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// Const setupHandlebars = async () => {
//   //handlebars does not support commonjs, we cannot use require
//   Const hbsModule = await import('nodemailer-express-handlebars');
//   Transporter.use('compile', hbsModule.default({
//     ViewEngine: {
//       Extname: '.hbs',
//       PartialsDir: path.resolve('./templates/'),
//       DefaultLayout: false,
//     },
//     ViewPath: path.resolve('./templates/'),
//     ExtName: '.hbs',
//   }));
// };

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: false,
	auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

//  Const htmlTemplate = fs.readFileSync('./templates/email-template.html', 'utf-8');

const sendEmail = async (to, name, verificationToken) => {
	// Await setupHandlebars();
	//  Let htmlContent = htmlTemplate.replace("{{name}}", name);

	const verificationUrl = `http://localhost:3000/user/verify?verification_token=${verificationToken}`;

	const ejsTemplate = await ejs.renderFile('./templates/email-template.ejs', {
		name,
		verificationUrl,
	});

	const mailOptions = {
		from: process.env.EMAIL_USER, // Senders email
		to, // Recipient email
		subject: 'Account Created Successfully!',

		// For html template
		// Html:htmlContent,

		// For ejs template
		html: ejsTemplate,

		// For hbs template
		// Template: 'email-template',
		// Context: { name },

		// Attachments for email
		attachments: [
			{
				filename: 'logo.png',
				path: './images/logo.png',
				cid: 'logo',
				contentDisposition: 'inline',
			},
			{ filename: 'fb.png', path: './images/fb.png', cid: 'fb', contentDisposition: 'inline' },
			{ filename: 'x.png', path: './images/x.png', cid: 'x', contentDisposition: 'inline' },
			{ filename: 'class.pdf', path: './images/class.pdf', cid: 'class' },
		],
	};
	return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
