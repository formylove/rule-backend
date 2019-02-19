const mongoose = require('mongoose')

const Task = mongoose.model('Task')

exports.getAll = function(res){
    console.info('in the service')
    return Task.find().exec(function(err,docs){
         res.json(docs);
    })
}

exports.save = function(task){
    console.error('save in the service')
    if(task instanceof Object){
        var t = new Task(task)
        t.save()
    }
}