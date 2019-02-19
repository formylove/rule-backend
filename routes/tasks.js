var express = require('express');
var router = express.Router();
var taskService = require('../models/taskService');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var task = {
        title:'reading',
        weight:10
    }
    taskService.save(task)
    taskService.getAll(res);
  });


router.post('/', function(req, res, next) {
res.send('respond with a resource');
});

module.exports = router;