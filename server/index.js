const cors = require("cors");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/',(req,res) => {
    res.send("meow");
})

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});
