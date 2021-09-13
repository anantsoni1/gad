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
  blogsHeading: {
    type: String,
    required: true,
  },
  blogsSubHeading: {
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
  discoverImg: {
    type: String,
    required: true,
  },
  kindergarten: {
    type: String,
    required: true,
  },
  kindergartenImg: {
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
  featureOne: {
    type: String,
    required: true,
  },
  featureTwo: {
    type: String,
    required: true,
  },
  featureThree: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HomePage", HomePageSchema);
