//@ts-check
/** Express router providing user related routes
 * @module router/htmlRoutes
 * @requires express (https://www.npmjs.com/package/nodemailer)
 * @requires path
 * @requires ../data/friends.js
 */

/**
 * @name express
 */
var express = require("express");

/**
 * @name path
 */
var path = require("path");

/**
 * @type {object}
 * @constant
 * @namespace htmlRoutes
 */
var router = express();


// Routes
// =============================================================

// Basic route that sends the user first to the survey.html Page

/**
 * Sends the user to the survey page
 * @function
 * @name get/survey
 * @memberof module:routers/htmlRoutes
 * @inner
 * @param {string} path - /survey string to get you home.
 * @returns {File} serves survey.html 
 */
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


/**
 * Sends the user to the home page
 * @function
 * @name get/
 * @memberof module:routers/htmlRoutes
 * @inner
 * @param {string} path - /survey string to get you home.
 * @returns {File} serves home.html 
 */
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;