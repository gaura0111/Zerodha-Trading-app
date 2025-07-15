require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // move to the next middleware or route
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports = {
  userVerification,
  createSecretToken
};
