const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

// Register user
const registerUser = async (req, res) => {
  const { fullname, email, age, country, address, password } = req.body;

  // Create a new user instance
  const newUser = new User({
    fullname,
    email,
    age,
    country,
    address,
    password: CryptoJS.AES.encrypt(password, process.env.PASS).toString(),
  });

  try {
    // Save user in the database
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You have not registered");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

    const { password, ...info } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginUser, registerUser };
