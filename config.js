//纯json对象使用json文件,通过require引入,需要加入js代码只能使用js脚本
var path = require("path")
const test = true
const ip = test ? "47.101.36.191" : "172.20.0.2"
const port = test ? "10000" : "27017"
module.exports={
    dbUrl:`mongodb://pimp:lingo@${ip}:${port}/prism`,
    dbOptions: {useNewUrlParser: true}
}