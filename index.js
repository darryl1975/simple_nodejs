var express = require('express');
var app = express();

app.get('/home', function(request, response) {
    response.send('Hello World');
});

app.get('/test', function(request, response) {
    response.send('Test... test...');
});

app.listen(3000, function() {
    console.log("Server started on port 3000...");
});