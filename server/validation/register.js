const Validator = require("Validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //If nothing has been passed to there parameters, then make it an empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.rollno = !isEmpty(data.name) ? data.name : "";
  data.club = !isEmpty(data.name) ? data.name : "";

  //Check the name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //Check the email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Check the roll number
  if (Validator.isEmpty(data.rollno)) {
    errors.rollno = "Roll number field is required";
  } else if (!Validator.isEmail(data.rollno)) {
    errors.rollno = "Roll number is invalid";
  }

  //Check the club
  if (Validator.isEmpty(data.club)) {
    errors.club = "Club field is required";
  } else if (!Validator.isEmail(data.club)) {
    errors.club = "Club is invalid";
  }

  //Passwords check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
