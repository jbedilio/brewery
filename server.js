const express = require('express');

const bp = require('body-parser');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

const beer = require('./app/models/beer.js');

const mt = require('./app/models/mtBottle.js');

const htmlR = require('./app/routing/htmlRoutes.js');

const apiR = require('./app/routing/apiRoutes.js');


app.listen(PORT, () => {

    console.log('listening to PORT: ' + PORT);
})



