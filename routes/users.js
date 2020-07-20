const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Get The users
// @access  Public
router.get('/', (req, res) => {
  res.send('Get The Request');
});

module.exports = router;
