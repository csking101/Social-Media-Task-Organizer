const Task = require("../models/task-schema");

const getTasks = async (req, res) => {
  try {
    let data = await Task.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

const getTaskByClub = async (req, res) => {
  try {
    let data = await Task.find({ club: req.params.club });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

const addTask = async (req,res) => {
  const taskData = req.body;
  try {
    let data = await Task.insertMany(taskData);
    console.log("Default task data inputted successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: data.message });
  }
}

const deleteTask = async (req,res) => {
  try{
    let data = await Task.deleteMany({ id:req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:data.message})
  }
}

module.exports = { getTasks, getTaskByClub, addTask, deleteTask };
