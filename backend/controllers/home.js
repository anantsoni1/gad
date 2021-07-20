const HomePage = require("../models/home");
const mime = require("mime");
const fs = require("fs");

exports.addHomeData = async (req, res) => {
  var matches = req.body.featureOne.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  var matchesTwo = req.body.featureTwo.match(
    /^data:([A-Za-z-+/]+);base64,(.+)$/
  );
  var matchesThree = req.body.featureThree.match(
    /^data:([A-Za-z-+/]+);base64,(.+)$/
  );
  var response = {};
  if (
    matches.length !== 3 &&
    matchesTwo.length !== 3 &&
    matchesThree.length !== 3
  ) {
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
  let fileName = "featureOne" + "." + extension;
  console.log(fileName);
  try {
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    let product = {
      ...req.body,
      featureOne: "images/" + fileName,
      featureTwo: "images/" + fileName,
      featureThree: "images/" + fileName,
    };
    console.log(product);
    let homePage = HomePage(product);
    homePage.save((err, data) => {
      return res.status(201).json(data);
    });
  }catch(e){
    return res.status(400).send({
      msg: e,
    });
  }
};

exports.modifyHomeData = async (req, res) => {
  if (
    !req.query.id ||
    !req.body.heading ||
    !req.body.subHeading ||
    !req.body.curriculaHeading ||
    !req.body.curriculaSubHeading ||
    !req.body.discoverHeading ||
    !req.body.discoverSubHeading ||
    !req.body.discoverText ||
    !req.body.kindergarten ||
    !req.body.discoverMoreHeading ||
    !req.body.discoverMoreSubHeading ||
    !req.body.discoverMoreText ||
    !req.body.featureOne ||
    !req.body.featureTwo ||
    !req.body.featureThree
  ) {
    return res.status(400).json({ msg: "Invalid data" });
  }
  HomePage.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
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
