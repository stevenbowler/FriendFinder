# FriendFinder

### Overview
This is an execution of the Word Guess/Hangman Game using Command Line Interface (CLI) only.  The purpose is to provide a simple Word Guess/Hangman Game to pass the time during the Coronavirus quarantine period, or any self-imposed or non-self-imposed quarantine period.   Additionally, the project has afforded this programmer the opportunity to develop skills with CLI NPM package [Inquirer](https://www.npmjs.com/package/inquirer), as well as develop programming skills in use of JS constructors, objects and methods.  `Enjoy`.

Attribution: List of best 250 hard words for hangman from this site: [hangman.com](https://www.hangmanwords.com/words).

### User Documentation
First, watch this video: _*[FriendFinder](https://drive.google.com/file/d/1xxj5cmSW5yAJsqbmiWp-kKbeFbjaZVu9/view)*_

From the console terminal prompt:
1. Enter `node index`
2. Will display `The word is: _ _ _ _ _ _` where underscores show number of letters in the word.
3. You will be prompted `Guess the next letter?`
4. Enter one letter guess and press `enter` key
5. Console log will display status of guesses, bad guesses and remaining bad guesses.
6. Repeat steps 3. thru 5. until you either solve the word or fail.
7. See clips below for examples.

Enter `node index` get prompted for input
````
$ node index
The word is: _ _ _ _ _ 
? Guess the next letter?
````
Enter one letter and press `enter` key, console log will display status
````
? Guess the next letter?  u
The word is: _ _ _ _ _
badGuesses: u  Bad Guesses Used: 1 of 11
````
Repeat guessing letters, status will update each time
````
? Guess the next letter?  y
The word is: _ _ y _ _     
badGuesses: u  Bad Guesses Used: 1 of 11

? Guess the next letter?  t
The word is: _ _ y _ _     
badGuesses: u t  Bad Guesses Used: 2 of 11

? Guess the next letter?  e
The word is: _ _ y _ _     
badGuesses: u t e  Bad Guesses Used: 3 of 11

? Guess the next letter?  z
The word is: _ _ y _ _     
badGuesses: u t e z  Bad Guesses Used: 4 of 11

? Guess the next letter?  r
The word is: _ _ y _ _     
badGuesses: u t e z r  Bad Guesses Used: 5 of 11

? Guess the next letter?  b
The word is: _ _ y _ _     
badGuesses: u t e z r b  Bad Guesses Used: 6 of 11

? Guess the next letter?  h
The word is: _ _ y _ h     
badGuesses: u t e z r b  Bad Guesses Used: 6 of 11

? Guess the next letter?  p
The word is: _ _ y p h
badGuesses: u t e z r b  Bad Guesses Used: 6 of 11

? Guess the next letter?  g
The word is: g _ y p h
badGuesses: u t e z r b  Bad Guesses Used: 6 of 11

? Guess the next letter?  l
The word is: g l y p h
badGuesses: u t e z r b  Bad Guesses Used: 6 of 11
congratulations it was glyph
````


### Program Documentation
Main module and class references for Letter, Word and WordGuess-Cli can be accessed [here](https://stevenbowler.github.io/WordGuess-Cli/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/WordGuess-Cli/docs/global.html), 