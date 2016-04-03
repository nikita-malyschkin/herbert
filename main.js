var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(__dirname + '/public/index.html')
})

app.listen(3000)
console.log('Listening on port http://localhost:3000');
