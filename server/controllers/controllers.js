import mongoose from 'mongoose'
import Recipe from '../models/recipe'


exports.root = (req, res) => {
    res.render('index')
}

exports.publish = (req, res) => {
    res.render('post')
}


exports.allRecipes = async (req, res) => {
  const recipes = await Recipe.find()
  res.json(recipes)
}

exports.recipe = async (req, res) => {
  const slug =  req.params.recipe
  const recipe = await Recipe.find({slug: slug})

  res.send(recipe)
}

exports.postRecipe = async (req,res) => {
  const recipe = new Recipe(req.body)
    await recipe.save()
    req.addFlashMessage('success', 'thanks!, the recipe has been published successfuly')
    res.redirect(`/recipes/${recipe.slug}`)
}
