# FriendFinder

### Overview
This is a fun search for a compatible individual, just enter personal contact information and answer 10, not-overly-personal questions and see who the magical computer algorithm identifies.  The app will facilitate the identification of compatible individuals with whom the user may wish to pass the time during the Coronavirus quarantine period, or any self-imposed or non-self-imposed quarantine period.   Note: if a match/kindered-spirit is found, the user will receive an email with the contact information for the match.  This program was developed by Steven Bowler for the purpose of gaining experience in creating and deploying a functional app on Heroku.  The project has afforded this programmer the opportunity to develop practical skills in the use of [nodemailer](https://www.npmjs.com/package/nodemailer), to send emails from an app deployed on [Heroku](https://www.heroku.com).  `Enjoy`.


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

ATTENTION: to deploy to Heroku then following `git push heroku master` command, and before accessing the app page, will be necesary to set the two environmental variables with these commands from the Heroku CLI:
````
heroku config:set NODEMAILER_GMAIL_ACCOUNT=*your_gmail_address*
heroku config:set NODEMAILER_GMAIL_PASSWORD=*your_gmail_password*
````
To use email other than gmail as host, will require setup and debug in a similar fashion, including assignments to the appropriate email address and password variables in the [nodemailer.js](https://stevenbowler.github.io/FriendFinder/docs/utilities_nodemailer.js.html) file.