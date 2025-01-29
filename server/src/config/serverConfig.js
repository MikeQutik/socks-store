const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');

const serverConfig = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(morgan('dev'));
    // app.use(cors(corsConfig));
}

module.exports = serverConfig;
