const AboutPage = require("../models/About");
const mime = require("mime");
const fs = require("fs");

exports.addAboutPageData = async (req, res) => {
  let newData = [];
  req.body.posts.map((val) => {
    var matches = val.img.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
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
    let fileName = val.heading.replace(/\s/g, "") + "." + extension;
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    let product = {
      ...val,
      img: "images/" + fileName,
    };
    newData.push(product);
  });
  let newDataObj = {
    posts: newData,
  };
  try {
    let aboutPage = AboutPage(newDataObj);
    aboutPage.save().then((data, error) => {
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
exports.getAboutPageData = async (req, res) => {
  try {
    AboutPage.find({}, (err, data) => {
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

exports.modifyAboutPageData = async (req, res) => {
  let newData = [];
  req.body.posts.map((val) => {
    if (val.img.substring(0, 6) !== "images") {
      var matches = val.img.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
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
      let fileName = val.heading.replace(/\s/g, "") + "." + extension;
      fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
      let product = {
        ...val,
        img: "images/" + fileName,
      };
      newData.push(product);
    } else {
      newData.push(val);
    }
  });
  let newDataObj = {
    posts: newData,
  };
  console.log(newDataObj);
  AboutPage.findByIdAndUpdate(req.query.id, newDataObj, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};
