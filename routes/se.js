'use strict';

const express    = require('express');
const se         = express.Router();
const secret     = process.env.SECRET;
const db         = require('../db/pg');
const request    = require('request');
const bodyParser = require('body-parser');

se.get( '/', db.showStars, (req, res) => {
  res.send(res.rows)
})


se.get( '/amnh', (req, res) => {
  request({ url: 'http://star-api.herokuapp.com/api/v1/stars', jsonp: true },
    function(err, apires, body) {
      res.send(body)
    })
})


module.exports = se;
