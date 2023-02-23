const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/connectDb");

const userRoute = require("./router/userRoute");
require("dotenv").config();

connectDb();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/", userRoute);
const port = process.env.PORT || 3002;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
