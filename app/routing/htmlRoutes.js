//requiring the npm packages
const express = require('express');

const bp = require('body-parser');

const path = require('path');
//grabbing an instance of express
const app = express();
//requiring the javascript files with the data
const beer = require('./../models/beer.js');

const mt = require('./../models/mtBottle.js');
//creating a route function to fire when called by the server
function htmlR(app, __dirname, brew) {

    app.get('/', (req, res) => {

        res.sendFile(path.join(__dirname, './app/public/home.html'));
    });

    app.get('/brewery', (req, res) => {

        res.sendFile(path.join(__dirname, './app/public/brewery.html'));
    
    });

    console.log("Yo, from the html hizzy!");
}
//exporting the route file
module.exports = htmlR;
