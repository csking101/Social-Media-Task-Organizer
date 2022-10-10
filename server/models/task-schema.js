const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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
  platform: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date, //This is a unix timestamp
    required: true,
  },
  subtasks: {
    type: [{ type: Schema.Types.ObjectId, ref: "Subtask" }],
    default: [],
  },
  club: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  creator: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
