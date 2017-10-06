//requiring the npm packages
const express = require('express');

const bp = require('body-parser');

const path = require('path');
//setting an instance of express
const app = express();
//setting the dynamic port
const PORT = process.env.PORT || 3000;
//setting express to use bodyParser
app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());
//requiring the javascript files with the data
const beer = require('./app/models/beer.js');

const mt = require('./app/models/mtBottle.js');
//importing my route modules & calling the functions that house them
const htmlR = require('./app/routing/htmlRoutes.js');

htmlR(app, __dirname);

const apiR = require('./app/routing/apiRoutes.js');

apiR(app, __dirname, beer);
//setting the server to listen to the dynamic port
app.listen(PORT, () => {

    console.log('listening to PORT: ' + PORT);
})