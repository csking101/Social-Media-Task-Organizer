const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys.js");

const User = require("../models/user-schema");
const Task = require("../models/task-schema");
const Subtask = require("../models/subtask-schema");

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

/*For login and registration*/

// @route POST api/register-user
// @desc Registering the user
// @access Public

router.post("/register-user", (req, res) => {
  //Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists " });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rollno: req.body.rollno,
        club: req.body.club,
      });

      //Hash the password before saving in the db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST /api/login-user
// @desc Login user and return JWT token
// @access Public

router.post("/login-user", (req, res) => {
  //Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 30000000, // Number in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

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
