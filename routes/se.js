'use strict';

const express    = require('express');
const se         = express.Router();
const secret     = process.env.SECRET;
const db         = require('../db/pg');
const request    = require('request');
const bodyParser = require('body-parser');

se.get( '/', db.showStars, (req, res) => {
  res.render('se/se', {
    stars: res.rows
  })
})


module.exports = se;
