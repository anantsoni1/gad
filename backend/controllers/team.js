const TeamPage = require("../models/team");

exports.addTeamPageData = async (req, res) => {
  let teamPage = TeamPage(...req.body);
  teamPage.save().then((data, error) => {
    if (error) {
      return res.status(400).send({
        msg: "Failed to add",
      });
    }
    return res.status(200).send({
      msg: "Data Added succesfully",
      data: data,
    });
  });
};
// get all
exports.getTeamPageData = async (req, res) => {
  try {
    TeamPage.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }

      if (data) {
        return res.status(200).json({ data: data });
      }
    });
  } catch (e) {
    return res.status(400).json({ msg: e });
  }
};

exports.modifyTeamPageData = async (req, res) => {
  TeamPage.findByIdAndUpdate(req.query.id, ...req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};
