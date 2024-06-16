const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password, location, fullname, gender, phone, dob } = req.body;

  try {
    const user = await User.signup(
      email,
      password,
      location,
      fullname,
      gender,
      phone,
      dob
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  const allusers = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(allusers);
};

const getsingleUser = async (req, res) => {
  const { id } = req.params;
  const singleuser = await User.findById(id);

  if (!singleuser) {
    return res.status(404).json({ error: "No such User" });
  }

  res.status(200).json(singleuser);
};
module.exports = { signupUser, loginUser, getAllUsers, getsingleUser };
