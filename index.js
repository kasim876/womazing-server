require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./static'));
app.use(router);

const port = process.env.PORT || 9001;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log('Server started on port %d', port));
  } catch (error) {
    console.log(error)
  }
}

start();
