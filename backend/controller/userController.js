const User = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const createUsers = await User.create(req.body);
    res.status(200).json(createUsers);
  } catch (error) {
    res.status(404).json("there is something missing");
  }
};

module.exports = { getAllUser, createUser };
