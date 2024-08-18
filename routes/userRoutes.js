const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get current user (authenticated route)
router.get('/current-user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

module.exports = router;
