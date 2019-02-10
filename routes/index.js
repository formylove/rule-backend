const mongoose= require('mongoose');
const express = require('express');
const config = require("../config")

mongoose.connect(config.dbUrl);
var SkillSchema = mongoose.Schema({
name:String,
rating:Number,
order:Number
})


var Skill = mongoose.model('Skill',SkillSchema,'skills');

var skill = new Skill({
name:'java',
rating:7,
order:1
})
skill.save()


var title = 'express';

Skill.find({},(err,docs)=>{
if(err){
console.info(err)
}
console.info('++++++++++++++++++++++++++++++++++++++++++++++++++'+docs)
console.info(docs[0].name)
title=docs[0].name
})


var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: title  });
});

module.exports = router;
