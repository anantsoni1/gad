const mongoose = require("mongoose");

const ListPoints = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  },
});
const CareerPageSchema = new mongoose.Schema({
  headingText: {
    type: String,
    required: true,
  },
  subHeadingText: {
    type: String,
  },
  headingPoints: [ListPoints],
  attachPoints: [ListPoints],
  attachText: {
    type: String,
    required: true,
  },
  requirementsPoints: [ListPoints],
});

module.exports = mongoose.model("CareerPage", CareerPageSchema);
