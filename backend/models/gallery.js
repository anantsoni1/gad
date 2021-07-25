const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallery", GallerySchema);
