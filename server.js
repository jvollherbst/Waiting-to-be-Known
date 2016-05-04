'use strict'

require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const request    = require('request');

const app        = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/')));

app.set('views', './views')
app.set('view engine', 'ejs')


// routes
// app.use('/users', require(path.join(__dirname, '/routes/users')));

app.get('/',  (req, res) => {
  res.render('index')
})

app.get('*',  (req, res) => {
  res.render('index')
})

app.use('/se', require(path.join(__dirname, '/routes/se')));
const port = process.env.PORT || 3000;
const server = app.listen(port, function( ){
});
