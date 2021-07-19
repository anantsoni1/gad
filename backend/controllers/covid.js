const Covid = require("../models/covid");

exports.addCovid = async (req, res) => {
  if (!req.body.paragraphOne || !req.body.paragraphTwo || !req.body.paragraphThree) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  let data = Covid(...req.body);
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json(data);
  });
};

exports.modifyCovid = async (req, res) => {
  if (!req.body.paragraphOne || !req.body.paragraphTwo || !req.body.paragraphThree) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  Covid.findByIdAndUpdate(req.query.id, ...req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};

exports.getCovid = (req, res) => {
  Covid.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json({ slots: data });
  });
};
