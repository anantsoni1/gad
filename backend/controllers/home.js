const HomePage = require("../models/home");

exports.addHomeData = async (req, res) => {
  if (
    !req.body.heading ||
    !req.body.subHeading ||
    !req.body.curriculaHeading ||
    !req.body.curriculaSubHeading ||
    !req.body.discoverTitle ||
    !req.body.discoverText ||
    !req.body.applicationsAnnouncement
  ) {
    return res.status(400).json({ msg: "Invalid data" });
  }

  let data = HomePage(...req.body);
  data.save((err, data) => {
    return res.status(201).json(data);
  });
};

exports.modifyHomeData = async (req, res) => {
  if (
    !req.query.id ||
    !req.body.heading ||
    !req.body.subHeading ||
    !req.body.curriculaHeading ||
    !req.body.curriculaSubHeading ||
    !req.body.discoverTitle ||
    !req.body.discoverText ||
    !req.body.applicationsAnnouncement
  ) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  HomePage.findByIdAndUpdate(req.query.id, ...req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};

exports.getHomeData = (req, res) => {
  HomePage.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json({ slots: data });
  });
};
