const passport = require('passport');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const user = new User({ email, name, password });
        await User.register(user, password);

        req.login(user, (err) => {
            if (err) {
                console.error('Login after registration failed:', err);
                return res.status(500).json({ message: 'Login after registration failed' });
            }
            res.status(201).json({ message: 'User registered and logged in successfully', user: req.user });
        });
    } catch (error) {
        console.error('Server error during registration:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
};
