//@ts-check
/** 
 * package for inclusion in any program
 * @namespace nodemailer
 * 
 * 
 * @module sendEmail
 */


// add npm package nodemailer to package.json "npm i nodemailer" and require here
/**
 * @requires nodemailer
 * @type {*}
 */
var nodemailer = require('nodemailer');
require("dotenv").config();


/**
 * Schema for nodemailer, must have npm package dotenv installed "npm i dotenv" and .env file with following two lines
 *  NODEMAILER_GMAIL_ACCOUNT=your_gmail_address
 *  NODEMAILER_GMAIL_PASSWORD=your_gmail_password
 * 
 *  assumes your gmail account has "access for less secure apps" enabled
 * @namespace transporter
 * @memberof senEmail
 * @type {*}
 * @function createTransport
 * @property {string} service Name of email service such as "gmail" or "linode"
 * @property {object} auth Object contains email address and password of authorized server/sender
 * @property {string} auth.user Email address of authorized email server/sender
 * @property {string} auth.pass Email password of authorized email server/sender
 */
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_GMAIL_ACCOUNT,
        pass: process.env.NODEMAILER_GMAIL_PASSWORD
    }
});


/**
 * Parameter object for call to {@link sendEmail}, assumes npm package dotenv installed and .env file in place
 * @namespace mailOptions
 * @memberof sendEmail
 * @type {object}
 * @property {string} from The sending gmail/email account
 * @property {string} to The receiving email account
 * @property {string} subject The subject of the email
 * @property {string} text The text of the email
 */
var mailOptions = {
    from: process.env.NODEMAILER_GMAIL_ACCOUNT,
    to: 'stevenbowler@yahoo.com',
    subject: 'Testing Found Match Program',
    text: `Your Match has been Found`
};


/**
 * In your app include statement 'var sendEmail = require("thisNodeMailerFile.js")'
 * include call to "sendEmail(targetEmail)" in your code with target email address "targetEmail" as parameter
 * @namespace sendEmail
 * @memberof nodemailer
 * @function sendEmail
 * @param {string} newFriend 
 * @param {string} matchFriend 
 */
function sendEmail(newFriend, matchFriend) {
    // nodemailer
    mailOptions.to = newFriend;
    mailOptions.text = `Found at ${matchFriend}`;
    console.log(`transporter.sendMail mailOptions.to ${mailOptions.to} matchFriend: ${matchFriend}`);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;