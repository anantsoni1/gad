const mongoose = require("mongoose");

const ListPoints = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  },
});
const post = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  points: [ListPoints],
  img: {
    type: String,
    required: true,
  },
});
const AboutPageSchema = new mongoose.Schema({
  posts: [post],
});

module.exports = mongoose.model("AboutPage", AboutPageSchema);
