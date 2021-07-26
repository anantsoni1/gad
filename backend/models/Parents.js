const mongoose = require("mongoose");

const FileUploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const CalendarSchema = new mongoose.Schema({
  year: {
    type: String,
  },
  calendars: [FileUploadSchema],
});

const ParentsSchema = new mongoose.Schema({
  schoolPolicies: [FileUploadSchema],
  schoolNewsletters: [FileUploadSchema],
  calendar: CalendarSchema,
});

module.exports = mongoose.model("Parents", ParentsSchema);
