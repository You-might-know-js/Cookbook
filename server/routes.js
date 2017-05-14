const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    user: {
      loggedIn: true
    }
  });
})







module.exports = router
