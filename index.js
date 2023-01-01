require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT, () => console.log('Server started on port %d', process.env.PORT));
  } catch (error) {
    console.log(error)
  }
}

start();
