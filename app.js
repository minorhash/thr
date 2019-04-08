var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

var session = require('express-session');
 app.use(session({
   secret: 'secret',
   resave: false,
   saveUninitialized: false,
   cookie:{
   httpOnly: true,
   secure: false,
   maxage: 1000 * 60 * 30
   }
 }));

var arr=["index","page","out"]
for (var i=0;i<arr.length;i++){
arr[i]= require('./routes/'+arr[i]);
app.use('/', arr[i]);
}

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
