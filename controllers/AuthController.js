require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/TodoUser");

module.exports = {
  regis: async (req, res) => {
    const data = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;

    try {
      const isUserThere = await User.findOne({ email: data.email }).exec();

      if (isUserThere !== null) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      } else {
        const newUser = new User(data);
        newUser.save();

        res.status(201).json({
          message: "berhasil daftar",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error" });
    }
  },
  login: async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ email: data.email }).exec();
    if (!user) {
      res.status(404).json({ message: "tidak ada email terdaftar" });
      return;
    }

    const checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) {
      res.status(401).json({ message: "password yang diberikan salah" });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY
    );

    res.status(200).json({
      message: "berhasil masuk",
      token,
    });
  },
};
