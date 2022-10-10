const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subtaskSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  file: {
    type: String, //For now, it will remain a string, until the google drive api is linked
    required: true,
  },
  deadline: {
    type: Date, //This is a unix timestamp
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Subtask = mongoose.model("Subtask", subtaskSchema);
module.exports = Subtask;
