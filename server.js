// Requiring proper node modules
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path')

// setting express up as an app and setting the PORT so that it will work from any port assigned by host
var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Tells the server to listen on the PORT
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});