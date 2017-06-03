const path = require('path');

module.exports = {
  entry: './app/static/scripts/app.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist/static')
  },

  module: {
    rules: [
      {test: /.js$/ , use: 'babel-loader'}
    ]
  }
}
