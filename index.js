const express = require('express')
const path = require('path')
app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.get('/',function(req,res){
    res.render('index')
});

app.listen(3000)