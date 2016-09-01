var express = require('express');
var app = express();
app.use(express.static('./'));
var path = require('path');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('./'));

app.listen(8087);

