const userData = require("./constants/user-constant.js");
const User = require("./models/user-schema.js");
const taskData = require("./constants/task-constant");
const Task = require("./models/task-schema.js");
const subtaskData = require("./constants/subtask-constant.js");
const Subtask = require("./models/subtask-schema.js");

const DefaultUserData = async () => {
  try {
    //await User.deleteMany({});
    await User.insertMany(userData);
    console.log("Default user data inputted successfully");
  } catch (err) {
    console.log(err);
  }
};

const DefaultTaskData = async () => {
  try {
    await Task.deleteMany({});
    await Task.insertMany(taskData);
    console.log("Default task data inputted successfully");
  } catch (err) {
    console.log(err);
  }
};

const DefaultSubtaskData = async () => {
  try {
    await Subtask.deleteMany({});
    await Subtask.insertMany(subtaskData);
    console.log("Default subtask data inputted successfully");
  } catch (err) {
    console.log(err);
  }
};

const DefaultData = () => {
    DefaultUserData();
    DefaultTaskData();
    DefaultSubtaskData();
}


module.exports = { DefaultUserData, DefaultTaskData, DefaultSubtaskData, DefaultData };
