require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const app = express();

app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT, () => console.log('Порт запущен на сервере %d', process.env.PORT));
  } catch (error) {
    console.log(error)
  }
}

start();
