
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var phones = require('./data/phones.json');

var indexRouter = require('./routes/index');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", function(req, res){
    res.render("index", { title: "Phone Arena", products: phones, sourceCode:"https://github.com/ShooterArk/PhoneArenaServer", rnSourceCode: "https://github.com/ShooterArk/RNPhoneArena",
    description: "A simple react native and node application to display mobile phone models along with their details such as ram, color, manufacturer, price" });
})

app.use('/phones', indexRouter);



module.exports = app;
