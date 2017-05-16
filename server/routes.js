import express from 'express'
import controllers from './controllers/controllers'
const router = express.Router()


router.get('/', controllers.root)

router.get('/post', controllers.publish)

router.post('/post', (req, res, next) => {
  controllers.postRecipe(req, res).catch(next)
})

router.get('/success', (req, res) => {
  res.render('success')
})



module.exports = router
