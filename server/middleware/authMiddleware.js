const jwt = require("jsonwebtoken");
const keys = require("../config/keys.js");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, keys.secretOrKey, (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.redirect("/api/login-user");
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
      res.redirect("/api/login-user");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/api/login-user");
  }
};

module.exports = { requireAuth };
