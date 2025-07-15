const express = require('express');
const router = express.Router();

const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../util/SecretToken');

// Signup route
router.post('/signup', Signup);

// Login route
router.post('/login', Login);

// Verify route (protected)
router.post('/verify', userVerification, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
