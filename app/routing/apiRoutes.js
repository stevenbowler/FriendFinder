/*

Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


*/

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var friends = require("../data/friends");
var router = express();


/**
 * updates {@link "./friends.js"} with new member just entered 
 * @function updateFriendsJS
 * @param {Array<object>} friends 
 */
const updateFriendsJS = (friends) => {
    var friendString = "var friends = [";
    for (var i = 0; i < friends.length; i++) friendString += `\n${JSON.stringify(friends[i])},`;
    friendString = friendString.slice(0, -1);      // trim off the last comma
    friendsString = `${friendString}]; module.exports = friends;`
    console.log(`friendsString: ${friendsString}`);

    fs.writeFile("./app/data/friends.js", friendsString, function (err) {
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
 * @param {object} newFriend
 * @returns {object} 
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




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
router.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


// Displays all friends
router.get("/friends", function (req, res) {
    console.log(`friends: ${friends[0].name}`);
    return res.json(friends);
});


// Displays a single character, or returns false
router.get("/friends/:friend", function (req, res) {
    var chosen = req.params.friend;
    console.log(chosen);
    for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].name)
            return res.json(friends[i]);
    }
    return res.json(false);
});


// Create New Friend - takes in JSON input
router.post("/friends", function (req, res) {
    var newFriend = req.body;
    console.log(`newFriend.name: ${req.body.name} newFriend.score[0] ${newFriend.scores[0]}`);
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    var matchFriend = findMatch(newFriend);
    friends.push(newFriend);
    console.log(matchFriend);
    updateFriendsJS(friends);
    res.json(matchFriend);
});


module.exports = router;