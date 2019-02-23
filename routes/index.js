const express = require('express');
const Task = require('../models/task.js');


var title = "java"


var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('console', { title: title  });
});

module.exports = router;
