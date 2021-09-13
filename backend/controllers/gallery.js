const gallery = require("../models/gallery");
const mime = require("mime");
const fs = require("fs");

exports.addGallerydata = async (req, res) => {
  let newData = [];
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
    let fileName = req.body.name.replace(/\s/g, "") + "." + extension;
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    let product = {
      ...req.body,
      img: "images/" + fileName,
    };
    try {
      let gall = gallery(product);
      gall.save().then((data, error) => {
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
exports.getGalleryData = async (req, res) => {
  try {
    gallery.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      console.log(data);
      if (data) {
        return res.status(200).json({ data: data });
      }
    });
  } catch (e) {
    return res.status(400).json({ msg: e });
  }
};

exports.modifyGalleryData = async (req, res) => {
  let newData = [];
    if (req.body.img.substring(0, 6) !== "images") {
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
      let fileName = req.body.name.replace(/\s/g, "") + "." + extension;
      fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
      let product = {
        ...req.body,
        img: "images/" + fileName,
      };
      gallery.findByIdAndUpdate(req.query.id , product )
      .then(data=>{
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      })
    } else {
      gallery.findByIdAndUpdate(req.query.id , req.body )
      .then(data=>{
        return res.status(200).json(data);
      })
      .catch(err => {
        return res.status(400).json(err);
      })
    }
};

exports.deleteGalleryData = async (req, res) => {
  gallery.findByIdAndDelete(req.query.id)
  .then(data=>{
    return res.status(200).json(data);
  })
  .catch(err => {
    return res.status(400).json(err);
  })
};
