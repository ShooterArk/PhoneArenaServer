var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var phones = require('../data/phones.json')


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.status(200).send({status: true, model: phones});
});


module.exports = router;
