const User = require("../models/user-schema");

const getUsers = async (req, res) => {
  try {
    let data = await User.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

const getUser = async (req, res) => {
  const email = req.params.email;

  try {
    let data = await User.find({ email: email });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: data.message });
  }
};

module.exports = { getUsers, getUser };
