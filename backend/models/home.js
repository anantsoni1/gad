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
  discoverTitle: {
    type: String,
    required: true,
  },
  discoverText: {
    type: String,
    required: true,
  },
  applicationsAnnouncement: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HomePage", HomePageSchema);
