const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    user: {
      isLogged: true
    }
  });
})

router.get('/post', (req, res) => {
  res.render('post', {
    user: {
      isLogged: true
    }
  });
})

router.post('/post', (req, res) => {
  res.json(req.body)
})


module.exports = router
