const express = require("express");
const {
  getAllStories,
  getsingleStory,
  createStory,
} = require("../controllers/storyController");

// controller functions
const router = express.Router();

// login route
router.get("/getallstories", getAllStories);

// signup route
router.get("/getsingleStory/:id", getsingleStory);
router.post("/createStory", createStory);

module.exports = router;
