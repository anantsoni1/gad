const InfoPage = require("../models/info");

exports.addInfoPageData = async (req, res) => {
  console.log(req.body);
  let infoPage = InfoPage(req.body);
  infoPage.save().then((data, error) => {
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
exports.getInfoData = async (req, res) => {
  try {
    InfoPage.find({}, (err, data) => {
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

exports.modifyInfoData = async (req, res) => {
  InfoPage.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};
