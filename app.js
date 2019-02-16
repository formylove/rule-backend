var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

debug("slurp")
// 设置views存储目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//内置中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//处理application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
//第三方中间件
app.use(logger('dev'));
app.use(logger('combined', {stream : accessLog})); 
app.use(cookieParser());
//注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
