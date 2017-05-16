import mongoose from 'mongoose'
import Recipe from '../models/recipe'


exports.root = (req, res) => {
    res.render('index')
}

exports.publish = (req, res) => {
    res.render('post');
}


exports.postRecipe = async (req,res) => {
  const recipe = new Recipe(req.body)
  
    await recipe.save()
    req.addFlashMessage('success', 'yay! its done')
    res.redirect('/success')
}
