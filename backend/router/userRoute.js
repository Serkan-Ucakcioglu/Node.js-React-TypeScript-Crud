const express = require("express");
const {
  getAllUser,
  createUser,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");

const router = express.Router();

router.get("/users", getAllUser);
router.post("/create", createUser);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
