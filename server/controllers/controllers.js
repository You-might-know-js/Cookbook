require('../models/recipe');

import mongoose from 'mongoose'

const Recipe = mongoose.model('Recipe');

exports.postRecipe = async (req,res) => {

  const recipe = new Recipe(req.body)
    await recipe.save();
    res.redirect('/');
}
