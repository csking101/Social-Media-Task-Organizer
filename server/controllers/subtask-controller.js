const Subtask = require("../models/subtask-schema");
const Task = require("../models/user-schema");
const mongoose = require("mongoose");

const getSubtaskByName = async (req, res) => {
  try {
    let data = await Subtask.find({ assignee: req.params.name });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

const addSubtask = async (req, res) => {
  let subtaskData = req.body;
  subtaskData.task = mongoose.mongo.ObjectId(subtaskData.task);
  console.log("This is logged by controller", subtaskData);
  try {
    let data = await Subtask.insertMany(subtaskData);
    /*let data1 = await Task
      .findOneAndUpdate({ _id: subtaskData.task },{ subtasks:[...subtasks,subtaskData._id] })
      .exec((err, task) => {
        if (err) console.log(err);
        console.log("The task is ", task);
      });*/
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: data.message });
  }
};

const deleteSubtask = async (req, res) => {
  try {
    let data = await Subtask.deleteMany({ id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: data.message });
  }
};

module.exports = { getSubtaskByName, addSubtask, deleteSubtask };
