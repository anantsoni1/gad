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
  var matchesFour = req.body.discoverImg.match(
    /^data:([A-Za-z-+/]+);base64,(.+)$/
  );
  var matchesFive = req.body.kindergartenImg.match(
    /^data:([A-Za-z-+/]+);base64,(.+)$/
  );

  var response = {};
  var responseTwo = {};
  var responseThree = {};
  var responseFour = {};
  var responseFive = {};

  if (
    matches.length !== 3 &&
    matchesTwo.length !== 3 &&
    matchesThree.length !== 3 &&
    matchesFour.length !== 3 &&
    matchesFive.length !== 3
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

  responseTwo.type = matchesTwo[1];
  responseTwo.data = new Buffer(matchesTwo[2], "base64");
  let decodedImgTwo = responseTwo;
  let imageBufferTwo = decodedImgTwo.data;
  let typeTwo = decodedImgTwo.type;
  let extensionTwo = mime.extension(typeTwo);
  let fileNameTwo = "featureTwo" + "." + extensionTwo;

  responseThree.type = matchesThree[1];
  responseThree.data = new Buffer(matchesThree[2], "base64");
  let decodedImgThree = responseThree;
  let imageBufferThree = decodedImgThree.data;
  let typeThree = decodedImgThree.type;
  let extensionThree = mime.extension(typeThree);
  let fileNameThree = "featureThree" + "." + extensionThree;

  responseFour.type = matchesThree[1];
  responseFour.data = new Buffer(matchesFour[2], "base64");
  let decodedImgFour = responseFour;
  let imageBufferFour = decodedImgFour.data;
  let typeFour = decodedImgFour.type;
  let extensionFour = mime.extension(typeFour);
  let fileNameFour = "discover" + "." + extensionFour;

  responseFive.type = matchesThree[1];
  responseFive.data = new Buffer(matchesThree[2], "base64");
  let decodedImgFive = responseFive;
  let imageBufferFive = decodedImgFive.data;
  let typeFive = decodedImgFive.type;
  let extensionFive = mime.extension(typeFive);
  let fileNameFive = "kindergarten" + "." + extensionFive;

  try {
    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    fs.writeFileSync("./assets/images/" + fileNameTwo, imageBufferTwo, "utf8");
    fs.writeFileSync(
      "./assets/images/" + fileNameThree,
      imageBufferThree,
      "utf8"
    );
    fs.writeFileSync(
      "./assets/images/" + fileNameFour,
      imageBufferFour,
      "utf8"
    );
    fs.writeFileSync(
      "./assets/images/" + fileNameFive,
      imageBufferFive,
      "utf8"
    );
    let product = {
      ...req.body,
      featureOne: "images/" + fileName,
      featureTwo: "images/" + fileNameTwo,
      featureThree: "images/" + fileNameThree,
      discoverImg: "images/" + fileNameFour,
      kindergartenImg: "images/" + fileNameFive,
    };
    console.log(product);
    let homePage = HomePage(product);
    homePage.save((err, data) => {
      return res.status(201).json(data);
    });
  } catch (e) {
    return res.status(400).send({
      msg: e,
    });
  }
};

exports.modifyHomeData = async (req, res) => {
  if (req.body.featureOne && req.body.featureTwo && req.body.featureThree) {
    var matches = req.body.featureOne.match(
      /^data:([A-Za-z-+/]+);base64,(.+)$/
    );
    var matchesTwo = req.body.featureTwo.match(
      /^data:([A-Za-z-+/]+);base64,(.+)$/
    );
    var matchesThree = req.body.featureThree.match(
      /^data:([A-Za-z-+/]+);base64,(.+)$/
    );
    var matchesFour = req.body.discoverImg.match(
      /^data:([A-Za-z-+/]+);base64,(.+)$/
    );
    var matchesFive = req.body.kindergartenImg.match(
      /^data:([A-Za-z-+/]+);base64,(.+)$/
    );

    var response = {};
    var responseTwo = {};
    var responseThree = {};
    var responseFour = {};
    var responseFive = {};

    if (
      matches.length !== 3 ||
      matchesTwo.length !== 3 ||
      matchesThree.length !== 3 ||
      matchesFour.length !== 3 ||
      matchesFive.length !== 3
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

    responseTwo.type = matchesTwo[1];
    responseTwo.data = new Buffer(matchesTwo[2], "base64");
    let decodedImgTwo = responseTwo;
    let imageBufferTwo = decodedImgTwo.data;
    let typeTwo = decodedImgTwo.type;
    let extensionTwo = mime.extension(typeTwo);
    let fileNameTwo = "featureTwo" + "." + extensionTwo;

    responseThree.type = matchesThree[1];
    responseThree.data = new Buffer(matchesThree[2], "base64");
    let decodedImgThree = responseThree;
    let imageBufferThree = decodedImgThree.data;
    let typeThree = decodedImgThree.type;
    let extensionThree = mime.extension(typeThree);
    let fileNameThree = "featureThree" + "." + extensionThree;

    responseFour.type = matchesThree[1];
    responseFour.data = new Buffer(matchesFour[2], "base64");
    let decodedImgFour = responseFour;
    let imageBufferFour = decodedImgFour.data;
    let typeFour = decodedImgFour.type;
    let extensionFour = mime.extension(typeFour);
    let fileNameFour = "discover" + "." + extensionFour;

    responseFive.type = matchesThree[1];
    responseFive.data = new Buffer(matchesThree[2], "base64");
    let decodedImgFive = responseFive;
    let imageBufferFive = decodedImgFive.data;
    let typeFive = decodedImgFive.type;
    let extensionFive = mime.extension(typeFive);
    let fileNameFive = "kindergarten" + "." + extensionFive;

    fs.writeFileSync("./assets/images/" + fileName, imageBuffer, "utf8");
    fs.writeFileSync("./assets/images/" + fileNameTwo, imageBufferTwo, "utf8");
    fs.writeFileSync(
      "./assets/images/" + fileNameThree,
      imageBufferThree,
      "utf8"
    );
    fs.writeFileSync(
      "./assets/images/" + fileNameFour,
      imageBufferFour,
      "utf8"
    );
    fs.writeFileSync(
      "./assets/images/" + fileNameFive,
      imageBufferFive,
      "utf8"
    );
    let product = {
      ...req.body,
      featureOne: "images/" + fileName,
      featureTwo: "images/" + fileNameTwo,
      featureThree: "images/" + fileNameThree,
      discoverImg: "images/" + fileNameFour,
      kindergartenImg: "images/" + fileNameFive,
    };
    HomePage.findByIdAndUpdate(req.query.id, product, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      return res
        .status(201)
        .json({ msg: "Updated Data successfully", data: data });
    });
  } else {
    HomePage.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      return res
        .status(201)
        .json({ msg: "Updated Data successfully", data: data });
    });
  }
};

exports.getHomeData = (req, res) => {
  HomePage.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res.status(201).json({ slots: data });
  });
};
