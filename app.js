var express = require('express'); 

var app = express();
app.get('/', function (req, res) {
  res.send('hello jenkins 123');
});
app.listen(process.env.PORT || 31332);

module.exports = app;
