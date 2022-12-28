const express = require('express');
const router = require('./routes/router')
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(
    3000,
null,
 null,
 ()=> { console.log('server running...') }
);
//setting the view engine to be ejs
app.set('view engine', 'ejs');
//setting the views directory

app.set('views','views')

//
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
app.use(router);
