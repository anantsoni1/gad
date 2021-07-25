const mongoose = require("mongoose");

const singleImage = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
const GallerySchema = new mongoose.Schema({
  images: [singleImage],
});

module.exports = mongoose.model("Gallery", GallerySchema);
