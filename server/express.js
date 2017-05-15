import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import {config} from './config'
import routes from './routes'
import mongoose from 'mongoose'
import helpers from './helpers'
import handlers from './handlers'


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../dist/views'));

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

app.use('/', routes)

app.use(handlers.notFound)

app.use(handlers.renderErrorPage)


mongoose.connect(config.dataBase);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log('there was an error ' + err);
})


app.listen(config.port , () => {
  console.log(`yay! the server is up and running on ${config.host} ${config.port} and the env is currently ${config.env}`)
})
