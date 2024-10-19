const User = require('../models/TodoUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser  = await User.findOne({ username });
        if (existingUser ) {
            return res.status(400).send('User sudah ada disana');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        
        // Save the user
        await user.save();
        res.status(201).send('User daftar success');
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send('Error saat user daftar');
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User tidak ditemukan');

        // Validate password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Password Salah');

        // Generate token with expiration
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.header('Authorization', token).send({ token });
    } catch (error) {
        console.error("Error saat user login:", error);
        res.status(500).send('Error saat user login');
    }
};