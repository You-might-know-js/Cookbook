import mongoose from 'mongoose'
import slugs from 'slugs'

const recipeSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  slug: String,
  image: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: false
  },
  steps: {
    type: [String],
    required: false
  },
  category: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false
  }
})

recipeSchema.pre('save', function(next){
  if (!this.isModified('title')) next()

  this.slug = slugs(this.title)

  next()
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;
