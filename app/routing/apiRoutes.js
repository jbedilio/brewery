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
function apiR(app, __dirname, brew) {

    app.get('/api/brew', (req, res) => {

        res.json(brew);
    })

    app.post('/api/beer30', (req, res) => {

        res.send(beer);
    })

    console.log('Yo, from the api hizzy!');
}
//exporting the route file
module.exports = apiR;