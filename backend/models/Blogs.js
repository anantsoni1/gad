const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blogs", BlogsSchema);
