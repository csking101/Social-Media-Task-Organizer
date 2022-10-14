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

module.exports = { getTasks, getTaskByClub };
