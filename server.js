// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js");
var app = express();
require("dotenv").config();



const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');


//Middelware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

//Import routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Sets up the Express App var PORT = process.env.PORT || 3000;
// =============================================================
var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
