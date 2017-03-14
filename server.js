var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

app.listen(port);
console.log('Server is listening at port : ' + port);
