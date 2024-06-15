const express = require("express");

// controller functions
const {
  swarozgarloginUser,
  swarozgarsignupUser,
} = require("../controllers/swarozgaruserController");

const router = express.Router();

// login route
router.post("/login", swarozgarloginUser);

// signup route
router.post("/signup", swarozgarsignupUser);

module.exports = router;
