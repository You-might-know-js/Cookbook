import mongoose from 'mongoose';


const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
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

module.exports = mongoose.model('Recipe', recipeSchema);
