const AdmissionPage = require("../models/Admission");
const mime = require("mime");
const fs = require("fs");

exports.addAdmissionPageData = async (req, res) => {
  var matches = req.body.img.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    response = {};
  if (matches.length !== 3) {
    return res.status(400).send({
      msg: "Invalid Image",
    });
  }
  response.type = matches[1];
  response.data = new Buffer(matches[2], "base64");
  let decodedImg = response;
  let imageBuffer = decodedImg.data;
  let type = decodedImg.type;
  let extension = mime.extension(type);
  let fileName = req.body.heading.replace(/\s/g, "") + "." + extension;
  try {
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    let product = {
      ...req.body,
      img: "images/" + fileName,
    };
    let admissionPage = AdmissionPage(product);
    admissionPage.save().then((data, error) => {
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
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      msg: e,
    });
  }
};
// get all
exports.getAdmissionPageData = async (req, res) => {
  try {
    AdmissionPage.find({}, (err, data) => {
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

exports.modifyAdmissionPageData = async (req, res) => {
  let product;
  if (req.body.img.substring(0, 6) !== "images") {
    var matches = req.body.img.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
      response = {};
    if (matches?.length !== 3) {
      return res.status(400).send({
        msg: "Invalid Image",
      });
    }
    response.type = matches[1];
    response.data = new Buffer(matches[2], "base64");
    let decodedImg = response;
    let imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    let extension = mime.extension(type);
    let fileName = req.body.heading.replace(/\s/g, "") + "." + extension;
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    product = {
      ...req.body,
      img: "images/" + fileName,
    };
    console.log(product);
    AdmissionPage.findByIdAndUpdate(req.query.id, product, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      return res
        .status(201)
        .json({ msg: "Updated Data successfully", data: data });
    });
  } else {
    AdmissionPage.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      return res
        .status(201)
        .json({ msg: "Updated Data successfully", data: data });
    });
  }
};
