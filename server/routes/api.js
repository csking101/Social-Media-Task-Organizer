const express = require("express");
const router = express.Router();
const User = require('../models/user-schema')
const Task = require('../models/task-schema')
const Subtask = require('../models/subtask-schema')

/*For users*/

// @route GET api/users
// @desc Fetch the array of users
// @access Private
router.get("/users", (req, res) => {});

// @route POST api/users
// @desc Add a new user to the db
// @access Private
router.post("/users", (req, res) => {});

// @route DELETE api/users/:id
// @desc Delete a specific user from the db
// @access Private
router.delete("/users/:id", (req, res) => {});

// @route POST api/users/:id
// @desc Modify a specific user's details
// @access Private
router.put("/users/:id", (req, res) => {});

/*For tasks*/

// @route GET api/tasks
// @desc Fetch the array of tasks
// @access Private
router.get("/tasks", (req, res) => {});

// @route POST api/tasks
// @desc Add a new task to the db
// @access Private
router.post("/tasks", (req, res) => {});

// @route DELETE api/tasks/:id
// @desc Delete a specific task from the db
// @access Private
router.delete("/tasks/:id", (req, res) => {});

// @route POST api/tasks/:id
// @desc Modify a specific task's details
// @access Private
router.put("/tasks/:id", (req, res) => {});

/*For subtasks*/

// @route GET api/subtasks
// @desc Fetch the array of subtasks
// @access Private
router.get("/subtasks", (req, res) => {});

// @route POST api/subtasks
// @desc Add a new user to the db
// @access Private
router.post("/subtasks", (req, res) => {});

// @route DELETE api/subtasks/:id
// @desc Delete a specific user from the db
// @access Private
router.delete("/subtasks/:id", (req, res) => {});

// @route POST api/subtasks/:id
// @desc Modify a specific user's details
// @access Private
router.put("/subtasks/:id", (req, res) => {});

module.exports = router;
