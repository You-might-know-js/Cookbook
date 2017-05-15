import express from 'express'
const router = express.Router();
import controllers from './controllers/controllers'

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

router.post('/post', (req, res, next) => {
  controllers.postRecipe(req, res).catch(next);
})



module.exports = router
