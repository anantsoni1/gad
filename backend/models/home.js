const mongoose = require("mongoose");

const HomePageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  curriculaHeading: {
    type: String,
    required: true,
  },
  curriculaSubHeading: {
    type: String,
    required: true,
  },
  discoverHeading: {
    type: String,
    required: true,
  },
  discoverSubHeading: {
    type: String,
    required: true,
  },
  discoverText: {
    type: String,
    required: true,
  },
  kindergarten: {
    type: String,
    required: true,
  },
  discoverMoreHeading: {
    type: String,
    required: true,
  },
  discoverMoreSubHeading: {
    type: String,
    required: true,
  },
  discoverMoreText: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HomePage", HomePageSchema);
