const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys.js");

const User = require("../models/user-schema");
const Task = require("../models/task-schema");
const Subtask = require("../models/subtask-schema");

/*For login and registration*/

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

const { requireAuth } = require("../middleware/authMiddleware");

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
        console.log("Server API: Passwords match, continue login");
        // User matched
        // Create JWT Payload
        const payload = {
          id: user._id,
          name: user.name,
          club: user.club,
          email: user.email,
          rollno: user.rollno,
        };
        // Sign token
        const token = jwt.sign(
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
        try {
          res.cookie("jwt", token, { httpOnly: true, maxAge: 30000000 });
        } catch (err) {
          console.log("Error");
          res.status(201).json({ name: user.name, id: user._id }); //The name should be removed later
        }
        return token;
      } else {
        console.log("Server API: Password doesn't match");
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route POST /api/logout-user
// @desc Logout the user and redirect to the login page
// @access Private

router.post("/logout-user", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/api/login-user");
});

/*For users*/

const { getUsers, getUser } = require("../controllers/user-controller.js");

router.use("/users", requireAuth);

// @route GET api/users
// @desc Fetch the array of users
// @access Private
router.get("/users", getUsers);

// @route GET api/users/:email
// @desc Geth a user based on the email
// @access Private
router.get("/users/:email", getUser);

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

const {
  getTasks,
  getTaskByClub,
} = require("../controllers/task-controller.js");

// @route GET api/tasks
// @desc Fetch the array of tasks
// @access Private
router.get("/tasks", getTasks);

// @route GET api/tasks/:club
// @desc Fetch the array of tasks pertaining to a specific club
// @access Private
router.get("/tasks/:club", getTaskByClub);

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

const { getSubtaskByName } = require("../controllers/subtask-controller.js");

// @route GET api/subtasks
// @desc Fetch the array of subtasks
// @access Private
router.get("/subtasks", (req, res) => {});

// @route GET api/subtasks/:name
// @desc Fetch the array of subtasks assigned to a person by name
// @access Private
router.get("/subtasks/:name", getSubtaskByName);

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
