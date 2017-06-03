const dotnav = require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const routes = require('./routes')
const mongoose = require('mongoose')
const helpers = require('./helpers')
const handlers = require('./handlers')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const {env} = process

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../dist/views'));

app.use(session({secret: 'yay!'}))
app.use(helpers.flashMessage);
// app.use(cookieParser());
app.use(
      morgan((tokens, req, res) => {
        return [tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req,res)].join('')
}))

app.use(compression());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../dist/static/')))
app.use(express.static(path.join(__dirname, '../app/static/')))

app.use((req, res, next) => {
  res.locals.user = {
    isLogged: true
  }

  next()
})

app.use('/', routes)

app.use(handlers.notFound)
app.use(handlers.renderErrorPage)


mongoose.connect(env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log('there was an error ' + err);
})



app.listen(env.SERVER_PORT , () => {
  console.log(`yay! the server is up and running on ${env.HOST} ${env.SERVER_PORT} and the env is currently ${env.NODE_ENV}`)
})
