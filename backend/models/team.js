const mongoose = require("mongoose");

const ListMembers = new mongoose.Schema({
  member: {
    type: String,
    required: true,
  },
});
const ListTeam = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  members: [ListMembers],
});
const TeamPageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  team: [ListTeam],
});

module.exports = mongoose.model("TeamPage", TeamPageSchema);
