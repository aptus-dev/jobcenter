var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/booking', function(req, res) {
    res.sendFile(__dirname + '/public/booking.html');
});

app.get('/faqs', function(req, res) {
    res.sendFile(__dirname + '/public/faqs-page.html');
});


app.listen(process.env.PORT, function(err){
    if (err) throw err;
    console.log("Server is running at port: " + process.env.PORT + " and IP: " + process.env.IP );
    
});
