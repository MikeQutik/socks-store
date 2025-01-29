const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Конфигурация сервера
serverConfig(app)

// Маршрутизация сервера
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server started at ${PORT} port`));