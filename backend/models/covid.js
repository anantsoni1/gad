const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Covid", CovidSchema);
