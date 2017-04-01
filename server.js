var express = require('express'),
    app = express();


//when server recieves a get request for root it renders the index template into html
app.get('/', (req, res) => {
  res.render('index')
})

//setting the views property
app.set('views', __dirname + '/app/views');

//setting the view engine property to ejs template engine
app.set('view engine', 'ejs');


//specifying the directory that will contain our static file
app.use(express.static(__dirname + '/app/static'));


//listen for requests on port 8080
app.listen(8080)
