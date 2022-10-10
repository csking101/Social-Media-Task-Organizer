const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");

require("dotenv").config();

const express = require("express");
const app = express();

const { DefaultData } = require("./default.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("Database is connected successfully!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});


DefaultData();//Use this line of code if you want to load the default data into the database