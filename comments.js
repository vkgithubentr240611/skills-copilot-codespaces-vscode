//create a web server
//create an express server
var express = require('express');
var app = express();
var path = require('path');

//import the comments module
var comments = require('./comments');

//serve the static files
app.use('/', express.static(path.join(__dirname, 'public')));

//get the comments
app.get('/comments', function(req, res) {
    //send the comments as a JSON array
    res.json(comments.get());
});

//add a comment
app.post('/comments', function(req, res) {
    //get the comment from the request body
    var comment = req.body;
    //add the comment to the comments
    comments.add(comment);
    //send a 200 response
    res.sendStatus(200);
});

//start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
