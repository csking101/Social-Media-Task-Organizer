const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
require("dotenv").config();
const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api',routes);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("Database is connected successfully!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});
