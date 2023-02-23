const express = require("express");
const { getAllUser, createUser } = require("../controller/userController");

const router = express.Router();

router.get("/users", getAllUser);
router.post("/create", createUser);

module.exports = router;
