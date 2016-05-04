'use strict';

require('dotenv').config();

const pgp = require('pg-promise')({
    // Initialization Options
});

const cn = process.env.DATABASE_URL;
const db = pgp(cn);

function showStars(req, res, next) {
  db.any(`SELECT * FROM stars`)
  .then(function(data) {
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

module.exports.showStars = showStars;
