const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION);
    console.log("mongoose connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
