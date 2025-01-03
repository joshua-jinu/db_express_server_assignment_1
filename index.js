const express = require('express');
const { resolve } = require('path');
const dotenv = require('dotenv');
const connectDB = require('./db.js')

const app = express();
const port = 3010;
dotenv.config();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening at http://localhost:${port}`);
});
