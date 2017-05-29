import express from 'express'
import controllers from './controllers/controllers'
const router = express.Router()


router.get('/', controllers.root)

router.get('/recipes', controllers.allRecipes)

router.get('/post', controllers.publish)

router.get('/recipes/:recipe', controllers.recipe)

router.post('/post', (req, res) => {
  controllers.postRecipe(req, res).catch((err) => {
    req.addFlashMessage('error', 'Oops some went wrong! please try again and make sure to fill all fields')
    res.redirect('/post')
  })
})


module.exports = router
