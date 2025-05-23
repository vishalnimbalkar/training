const {sendEmail} = require('../services/email.js')
const { validationResult } = require('express-validator');

const sendMail = async (req, res) => {
  const { to, name } = req.body;
  const result = validationResult(req);
  //check if any validation error occurs 
  if(!result.isEmpty()){
      return res.status(400).json({ success: false, error: 'Failed to send Email', result });
  }
  try {
    //send mail
    const response = await sendEmail(to, name);
    console.log(response);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { sendMail }