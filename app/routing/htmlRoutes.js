const express = require('express');

const bp = require('body-parser');

const path = require('path');

const app = express();

const beer = require('./../models/beer.js');

const mt = require('./../models/mtBottle.js');

function htmlR(app, __dirname, brew) {

    app.get('/', (req, res) => {

        res.sendFile(path.join(__dirname, './app/public/home.html'));
    });

    app.get('/brewery', (req, res) => {

        res.sendFile(path.join(__dirname, './app/public/brewery.html'));
    
    });

    console.log("yo, from the html hizzy!");
}

