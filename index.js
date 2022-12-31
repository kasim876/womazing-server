require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const start = () => {
  app.listen(process.env.PORT, () => console.log('Порт запущен на сервере %d', process.env.PORT));
}

start();
