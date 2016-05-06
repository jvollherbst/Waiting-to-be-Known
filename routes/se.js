'use strict';

const express    = require('express');
const se         = express.Router();
const secret     = process.env.SECRET;
const db         = require('../db/pg');
const request    = require('request');
const bodyParser = require('body-parser');

se.get( '/', db.showStars, (req, res) => {
  // res.render('se/se', { stars: res.rows })
  // console.log(res.rows);
  // res.render( 'se/se', { data: res.rows });
  res.send(res.rows)
  console.log(res.rows);
})


se.get( '/amnh', (req, res) => {
  request({ url: 'http://star-api.herokuapp.com/api/v1/stars', jsonp: true },
    function(err, apires, body) {
      res.send(body)
    })
})


module.exports = se;
