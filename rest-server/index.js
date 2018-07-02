require('dotenv').config();
require("babel-register");
const express = require('express');
const parser = require('body-parser');
const helmet = require('helmet');
// const cookieParser = require('cookie-parser');
// const session = require('cookie-session');
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

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
