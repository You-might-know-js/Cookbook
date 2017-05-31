
module.exports = {
  config: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    host: 'localhost:',
    dataBase: 'mongodb://wg:1991993@ds157559.mlab.com:57559/cookbook-recipes'
  }
}
