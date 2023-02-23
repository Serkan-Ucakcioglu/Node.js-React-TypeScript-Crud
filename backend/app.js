const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/connectDb");
require("dotenv").config();

connectDb();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const port = process.env.PORT || 3002;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
