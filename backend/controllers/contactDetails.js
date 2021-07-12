const ContactDetails = require("../models/contactDeatails");

exports.addContactDetails = async (req, res) => {
  if (!req.body.email || !req.body.phone || !req.body.address) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  let data = ContactDetails(...req.body);
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json(data);
  });
};

exports.modifyContactDetails = async (req, res) => {
  if (!req.body.email || !req.body.phone || !req.body.address) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  ContactDetails.findByIdAndUpdate(req.query.id, ...req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};

exports.getContactDetails = (req, res) => {
  ContactDetails.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json({ slots: data });
  });
};
