const mongoose= require('mongoose');

var TaskSchema = mongoose.Schema({
title:String,
weight:Number
})


var Task = mongoose.model('Task',TaskSchema,'tasks');

module.exports = Task