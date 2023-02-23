const express = require("express");
const {
  getAllUser,
  createUser,
  updateUsers,
} = require("../controller/userController");

const router = express.Router();

router.get("/users", getAllUser);
router.post("/create", createUser);
router.put("/:id", updateUsers);

module.exports = router;
