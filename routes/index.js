const express = require('express');
const Task = require('../models/task.js');



var task = new Task({
title:'cervical exercise',
weight:1
})
task.save()


var title = 'massage';

Task.find({},(err,docs)=>{
if(err){
console.info(err)
}
console.info('++++++++++++++++++++++++++++++++++++++++++++++++++'+docs)
console.info(docs[0].name)
title=docs[0].title
})


var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: title  });
});

module.exports = router;
