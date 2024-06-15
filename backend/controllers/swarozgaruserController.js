const swarozgarUser = require("../models/swarozgarUser");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const swarozgarloginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await swarozgarUser.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const swarozgarsignupUser = async (req, res) => {
  const { email, password, location, fullname, gender, phone, dob, interest } = req.body;

  console.log(req.body); // Log incoming request data
  console.log(typeof email, typeof password, typeof location, typeof fullname, typeof gender, typeof phone, typeof dob, typeof interest);

  try {
    const user = await swarozgarUser.signup(
      email,
      password,
      location,
      fullname,
      gender,
      phone,
      dob,
      interest
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { swarozgarsignupUser, swarozgarloginUser };
