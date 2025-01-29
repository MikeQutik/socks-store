const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')



const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });

const serverConfig = (app) => {

    app.use(express.urlencoded({ extended: true }));

    app.use(express.json());

    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../public')));

    app.use(morgan('combined', { stream: accessLogStream }));
}

module.exports = serverConfig;