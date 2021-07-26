const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  caption: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallery", GallerySchema);
