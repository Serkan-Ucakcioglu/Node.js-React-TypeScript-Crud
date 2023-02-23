const User = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllUser };
