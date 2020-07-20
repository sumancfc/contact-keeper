const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get the logged users
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in users');
});

// @route    POST api/auth
// @desc     Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
