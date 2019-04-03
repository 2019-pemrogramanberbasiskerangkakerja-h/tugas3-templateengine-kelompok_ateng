var express = require('express')
var path = require('path')
var hbs = require( 'express-handlebars');

app = express()
app.use(express.static('assets'))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/includes/'
  }));

var route = require('./routes/route.js')
app.use('/',route)

app.listen(3000)