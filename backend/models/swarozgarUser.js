const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const swarozgaruserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  fullname: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
});

// static signup method
swarozgaruserSchema.statics.signup = async function (
  email,
  password,
  location,
  fullname,
  gender,
  phone,
  dob,
  interest
) {
  // validation
  if (
    !email ||
    !password ||
    !location ||
    !phone ||
    !dob ||
    !fullname ||
    !gender ||
    !interest
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    location,
    fullname,
    gender,
    phone,
    dob,
    interest,
  });

  return user;
};

// static login method
swarozgaruserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("swarozgarUser", swarozgaruserSchema);
