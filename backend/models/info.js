const mongoose = require("mongoose");

const InfoPageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  display: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("InfoPage", InfoPageSchema);
