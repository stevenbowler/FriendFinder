//@ts-check
/**
 * @module server
 * @requires express
 * @requires dotenv
 * 
 * @namespace server
 */
// Dependencies
// =============================================================
/**
 * @name express
 */
var express = require("express");

/**
 * @name path
 */
var path = require("path");

/**
 * @name friends
 */
var friends = require("./app/data/friends.js");


require("dotenv").config();


/**
 * @type {object}
 * @constant
 * @namespace server
 */
var app = express();


/**
 * @const
 */
const apiRoutes = require('./app/routing/apiRoutes');

/**
 * @const
 */
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
    console.log("Server listening on: http://localhost:" + PORT);
});
