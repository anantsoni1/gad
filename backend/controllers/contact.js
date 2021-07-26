require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.contactUs = (req, res) => {
  const { formData } = req.body;
  if (!formData.email || !formData.name || !formData.message) {
    return res.status(400).send({ msg: 'You need to send all entries' });
  }
  const msg = {
  to: formData.email,
  from: process.env.SENDGRID_EMAIL, // Change to your verified sender
  subject: `Query from ${formData.name} (${formData.email})`,
  text: 'Contact Message',
  html: ` <pre>${formData.message}</pre>`,
  }
  sgMail.send(msg)
  .then(info => {
      res.status(200).send({msg: "Mail Sent Succesfully"})
  })
  .catch(err => {
      res.status(400).send({msg: "Could not send mail"})
  });
};

