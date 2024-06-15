const Story = require("../models/storyModel");
const mongoose = require("mongoose");

const createStory = async (req, res) => {
  const { title, desc, image, label, user_id } = req.body;

  try {
    console.log("Inside create story");
    const story = await Story.create({ title, desc, image, label, user_id });
    res.status(200).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllStories = async (req, res) => {
  const allstories = await Story.find({});

  res.status(200).json(allstories);
};

const getsingleStory = async (req, res) => {
  const { id } = req.params;
  const singlestory = await Story.findById(id);

  if (!singlestory) {
    return res.status(404).json({ error: "No such Story" });
  }

  res.status(200).json(singlestory);
};

module.exports = {
  createStory,
  getAllStories,
  getsingleStory,
};
