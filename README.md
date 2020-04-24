# FriendFinder

### Overview
This is an execution of the Word Guess/Hangman Game using Command Line Interface (CLI) only.  The purpose is to provide a simple Word Guess/Hangman Game to pass the time during the Coronavirus quarantine period, or any self-imposed or non-self-imposed quarantine period.   Additionally, the project has afforded this programmer the opportunity to develop skills with CLI NPM package [Inquirer](https://www.npmjs.com/package/inquirer), as well as develop programming skills in use of JS constructors, objects and methods.  `Enjoy`.

Attribution: List of best 250 hard words for hangman from this site: [hangman.com](https://www.hangmanwords.com/words).

### User Documentation

First, watch this video: _*[FriendFinder](https://drive.google.com/file/d/1Kyg4pH1CS2qgeg0UL-o6Z4PXpzuNhe-v/view)*_

To use the app click [FriendFinder](https://intense-ravine-38720.herokuapp.com/)
1. From the home page click the `Go to Survey` button
2. From the survey page, all fields are required:
    1. Enter `name` up to 256 characters
    2. Enter a `picture` string which should be in the format "https://www.yourSite.com/yourPicture.jpg"
    3. Enter an `email address`. *Provide valid email to receive contact info regarding your soulmate match via email.*
    4. Respond to the 10 required questions
    5. Click `Submit` button
3. Rejoice - you have found your soulmate


### Program Documentation
Main module and class references can be accessed [here](https://stevenbowler.github.io/FriendFinder/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/FriendFinder/docs/global.html), 


Deploy app thru [Heroku](https://www.heroku.com).

For the email notifications with gmail to work requires [dotenv](https://www.npmjs.com/package/dotenv) to be installed and a `.env` file must be stored in the root directory for the app.  The `.env` file must contain the app owner's gmail address and password as shown below.  Also, note the owner's gmail account must have `access for less secure apps` enabled.
````
NODEMAILER_GMAIL_ACCOUNT=*your_gmail_address*
NODEMAILER_GMAIL_PASSWORD=*your_gmail_password*
````
To use email other than gmail as host, will require setup and debug in a similar fashion, including assignments to the appropriate email address and password variables in the [nodemailer.js](https://stevenbowler.github.io/FriendFinder/docs/nodemailer.js.html) file.