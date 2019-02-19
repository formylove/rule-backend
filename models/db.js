const mongoose= require('mongoose');
const config = require("../config.js")
var db = mongoose.connection;
//That's great to notice, but "mongoose" (the object) contains another object of type "connection" that is already defined and instantiated. That means in this case, you can even use it without calling the "mongoose.connect()" method.可以放在connect之前添加监听
db.on('listened',function(err){
    if(err){
        console.error('数据库连接失败',err)
    }else{
        console.info('数据库连接成功!')
    }
});
// If the connection throws an error
db.on('error',function (err) {  
    console.info('Mongoose default connection error: ' + err);
}); 
db.on('disconnected', function () {  
    console.info('Mongoose default connection disconnected'); 
});
db.on('close',function(err){
    if(err){
        console.error('数据库连接失败',err)
    }else{
        console.info('数据库连接成功!')
    }
});
const dbOptions = {useNewUrlParser: true}
mongoose.connect(config.dbUrl, dbOptions);


// BRING IN YOUR SCHEMAS & MODELS
require('./task.js');