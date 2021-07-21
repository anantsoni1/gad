const mongoose = require("mongoose");

const ListPoints = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  },
});
const Link = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
const AdmissionPageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  links: [Link],
  step1Text: {
    type: String,
    required: true,
  },
  step1Points: [ListPoints],
  step1Links: [Link],
  step2Text: {
    type: String,
    required: true,
  },
  step2Points: [ListPoints],
  step2Links: [Link],
  step3Text: {
    type: String,
    required: true,
  },
  step3Points: [ListPoints],
  step3Links: [Link],
});

module.exports = mongoose.model("AdmissionPage", AdmissionPageSchema);
