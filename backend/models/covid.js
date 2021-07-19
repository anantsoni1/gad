const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema({
  paragraphOne: {
    type: String,
    required: true,
  },
  paragraphTwo: {
    type: String,
    required: true,
  },
  paragraphThree: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Covid", CovidSchema);
