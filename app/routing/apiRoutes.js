//@ts-check
/** Express router providing user related routes
 * @module router/apiRoutes
 * @requires express (https://www.npmjs.com/package/nodemailer)
 * @requires path
 * @requires fs
 * @requires ../data/friends.js
 * @requires dotenv
 * @requires ../../utilities/nodemailer
 */

/**
 * express module
 * @name express
 */
var express = require("express");

/**
 * @name path
 */
var path = require("path");

/**
 * @name fs
 */
var fs = require("fs");

/**
 * @name friends
 */
var friends = require("../data/friends");

/**
 */
require("dotenv").config();

/**
 * @name sendMail
 */
var sendMail = require("../../utilities/nodemailer");



/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace apiRoutes
 */
var router = express();


/**
 * friends object from {@link ../data/friends.js}
 * @typedef friends
 * @type {object} 
 * @property {string} friends.name name of this friend
 * @property {string} friends.email email address for this friend
 * @property {string} friends.photo http address of .jpg file for this friend
 * @property {Array<string>} friends.scores scores for answers to 10 questions
 */



/**
 * updates {@link "./friends.js"} with new member just entered 
 * @function updateFriendsJS
 * @param {Array<friends>} friends 
 */
const updateFriendsJS = (friends) => {
    /**
     * @type {string}
     */
    var friendString = "var friends = [";
    for (var i = 0; i < friends.length; i++) friendString += `\n${JSON.stringify(friends[i])},`;
    friendString = friendString.slice(0, -1);      // trim off the last comma
    friendString = `${friendString}]; module.exports = friends;`
    console.log(`friendString: ${friendString}`);

    fs.writeFile("./app/data/friends.js", friendString, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Content Added to friends.js");
        }
    });
}



/**
 * Finds the closest match between the new Friend and existing friends and returns the closest match
 * @function findMatch
 * @param {friends} newFriend
 * @returns {friends} 
 */
const findMatch = (newFriend) => {
    var smallestDifference = 50;
    var matchFriendIndex = 0;
    // console.log(`friends.length: ${friends.length}`);
    for (var i = 0; i < friends.length; i++) {
        var thisDifference = 0;
        var differenceNumber = 0;
        for (var j = 0; j < 10; j++) {
            differenceNumber = Number(newFriend.scores[j]) - Number(friends[i].scores[j]);
            if (differenceNumber < 0) differenceNumber = -differenceNumber;
            thisDifference = thisDifference + differenceNumber;
            // console.log(`findMatch thisDifference: ${thisDifference}  friends[${i}].scores[${j}] ${friends[i].scores[j]}  newFriend.scores[${j}]  ${newFriend.scores[j]}`);
        }
        if (thisDifference < smallestDifference) {
            smallestDifference = thisDifference;
            matchFriendIndex = i;
            // console.log(`matchFriendIndex: ${matchFriendIndex}`);
        }
    }
    return friends[matchFriendIndex];
}




/**
 * Basic route that sends the user first to the AJAX Page
 * @function
 * @name get/home
 * @memberof module:routers/apiRoutes
 * @param {string} path - /home to get you home.
 * @returns {URL} Returns url to home.html
 */
router.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});



/**
 * Basic route that sends JSON format of friends array
 * @function
 * @name get/friends
 * @memberof module:routers/apiRoutes
 * @inner
 * @param {string} path - /friends route
 * @returns {Array<friends>} returns friends array
 */
router.get("/friends", function (req, res) {
    console.log(`friends: ${friends[0].name}`);
    return res.json(friends);
});



// Displays a single character, or returns false
/**
 * Finds and returns single friend object or returns false
 * @function
 * @name get/friends/:friend
 * @memberof module:routers/apiRoutes
 * @inner
 * @param {string} path friends/:friend- /friends/:friends route
 * @returns {friends | false} returns friends object
 */
router.get("/friends/:friend", function (req, res) {
    var chosen = req.params.friend;
    console.log(chosen);
    for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].name)
            return res.json(friends[i]);
    }
    return res.json(false);
});



/**
 * Finds closest match to newFriend, updates {@link "../data/friends.js"} with {@link newFriend},
 * Send email to {@link newFriend} with {@link matchFriend.email}
 * @function
 * @name post/friends
 * @memberof module:router/apiRoutes
 * @inner
 * @param {string} path - post /friends route
 * @returns {friends} returns matchFriend object for display
 */
router.post("/friends", function (req, res) {
    /**
     * Assigned to req.body
     * @name newFriend Assigned to req.body
     * @type {object}
     */
    var newFriend = req.body;
    console.log(`newFriend.name: ${req.body.name} newFriend.score[0] ${newFriend.scores[0]}`);
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    var matchFriend = findMatch(newFriend);
    friends.push(newFriend);
    console.log(matchFriend);
    updateFriendsJS(friends);
    sendMail(newFriend, matchFriend);  // send both parties and email that they have found their match
    res.json(matchFriend);
});


module.exports = router;