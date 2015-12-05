var express = require('express');
var path = require('path');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : '',
  password : '',
  database : ''
});



app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/main_guest', function (req, res) {
  res.render('DB_main_guest');
});

app.get('/resist', function (req, res) {
  res.render('DB_resist');
});

app.get('/resist_agreement', function(req, res) {
  res.render('DB_resist_agreement')
})

app.get('/main_admin', function (req, res) {
  res.render('DB_main_admin');
});

app.get('/main_valuer', function (req, res) {
  res.render('DB_main_valuer');
});

app.get('/main_presenter', function (req, res) {
  res.render('DB_main_presenter');
});


app.listen(3000, function() {
  console.log('Server On!');
});
