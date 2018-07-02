require('dotenv').config();
require("babel-register");
const express = require('express');
const parser = require('body-parser');
const helmet = require('helmet');
import cors from 'cors';
const router = require('./router/index.js');
const path = require('path');
const PORT = process.env.SERVER_PORT;

const app = express();

const middleWare = [
  helmet(),  
  parser.json(),
  parser.urlencoded({ extended: true }),
  cors({
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
  }),
];

app.use(...middleWare);
app.use('/api', router);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

app.on('error', () => {
  app.close(
    setTimeout(app.listen((PORT, () => success('successfully rebooted server!'))), 1000)
  );
});