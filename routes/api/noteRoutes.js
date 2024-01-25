const router = require('express').Router();
const { Note } = require('../../models');

// GET /api/users
router.get('/', async (req, res) => {
  // Access our User model and run .findAll() method
  try {
    const noteData = await Note.findAll();
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const noteData = await Note.create(req.body);
    res.status(200).json(noteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;