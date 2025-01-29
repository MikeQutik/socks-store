const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const serverConfig = (app) => {

    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = serverConfig;

