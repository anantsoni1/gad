const CareerPage = require("../models/career");

exports.addCareerPageData = async (req, res) => {
  console.log("test");
  console.log(req.body);
  let careerPage = CareerPage(req.body);
  careerPage.save().then((data, error) => {
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
exports.getCareerPageData = async (req, res) => {
  try {
    CareerPage.find({}, (err, data) => {
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

exports.modifyCareerPageData = async (req, res) => {
  CareerPage.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};
