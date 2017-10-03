const express = require('express');

const bp = require('body-parser');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



