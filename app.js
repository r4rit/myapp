var express = require('express');
var path = require('path');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('DB_main_guest');
});

app.get('/resistration', function (req, res) {
  res.render('DB_resistration');
});

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
