const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  getAllUsers,
  getsingleUser,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);
router.get("/getallUsers", getAllUsers);
router.get("/getsingleUser/:id", getsingleUser);

module.exports = router;
