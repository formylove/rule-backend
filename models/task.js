const mongoose= require('mongoose');
const config = require("../config.js")

mongoose.connect(config.dbUrl);
var TaskSchema = mongoose.Schema({
title:String,
_id:mongoose.Schema.Types.ObjectId,
weight:Number
})


var Task = mongoose.model('Task',TaskSchema,'tasks');

module.exports = Task