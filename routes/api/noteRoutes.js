const router = require('express').Router();
const { Note } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method
  Note.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;