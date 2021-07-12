const ContactForm = require("../models/contactForm");

exports.addContactForm = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.subject ||
    !req.body.message
  ) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  let data = ContactForm(...req.body);
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json(data);
  });
};

exports.modifyContactForm = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.subject ||
    !req.body.message
  ) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  ContactForm.findByIdAndUpdate(req.query.id, ...req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};

exports.getContactForm = (req, res) => {
  ContactForm.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json({ slots: data });
  });
};
