const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Configure Global Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Configure routes
app.use('/auth', require('./auth/routes'));
app.use('/api', require('./api/routes'));

module.exports = app;
