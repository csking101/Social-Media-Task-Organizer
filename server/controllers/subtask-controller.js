const Subtask = require("../models/subtask-schema");

const getSubtaskByName = async (req, res) => {
  try {
    let data = await Subtask.find({ assignee: req.params.name });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

module.exports = { getSubtaskByName };
