/*
Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.
*/

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("../data/friends");

var router = express();


// Routes
// =============================================================

// Basic route that sends the user first to the survey.html Page
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Displays all characters
router.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
router.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
router.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
});

module.exports = router;