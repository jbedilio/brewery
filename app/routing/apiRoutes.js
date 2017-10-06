const express = require('express');

const bp = require('body-parser');

const path = require('path');

const app = express();

const beer = require('./../models/beer.js');

const mt = require('./../models/mtBottle.js');

function apiR(app, __dirname, brew) {

    app.get('/api/brew', (req, res) => {

        res.json(brew);
    })

    app.post('/api/beer30', (req, res) => {

        res.send(beer);
    })

    console.log('Yo, from the api hizzy!');
}

module.exports = apiR;