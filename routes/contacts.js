const express = require('express');
const router = express.Router();

// @route    GET api/contacts
// @desc     Register a user
// @access  Private
router.get('/', (req, res) => {
  res.send('Register a user');
});

// @route    POST api/contacts
// @desc     Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @route    Put api/contacts/:id
// @desc     Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route    delete api/contacts/:id
// @desc     Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
