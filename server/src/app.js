
require('dotenv').config()
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 3000;

const app = express();

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} PORT`);
});

