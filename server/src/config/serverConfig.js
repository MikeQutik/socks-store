const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const cors = require('cors');


const { CLIENT_URL } = process.env;

const corsConfig = {
    origin: [CLIENT_URL],
    credentials: true,
  };

const serverConfig = (app) => {

    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(cors({
        credentials: true,
        origin: ['http://localhost:5173']
    }));
}

module.exports = serverConfig;

