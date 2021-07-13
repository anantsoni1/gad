const mongoose = require("mongoose");

const ListPoints = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  },
});
const PrincipalPageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  points: [ListPoints],
  img: {
    type: String,
    required: true,
  },
  principalName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PrincipalPage", PrincipalPageSchema);
