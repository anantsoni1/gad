const mongoose = require("mongoose");

const ListPoints = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  },
});
const Link = new mongoose.Schema({
  link: {
    type: String,
    required: false,
  },
});
const Step = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  point: [ListPoints],
  links: [Link],
});
const AdmissionPageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  steps: [Step],
});

module.exports = mongoose.model("AdmissionPage", AdmissionPageSchema);
