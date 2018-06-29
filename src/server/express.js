import express from 'express'; 
import path from 'path';
const router = require('./router/index.js');

const server = express(); 

server.use('/api', router);  

const webpack = require('webpack'); 
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config); 

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

//This is in order, webpack dev middleware after webpack hot middleware after static middleware 
server.use(webpackDevMiddleware); 
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist'); 

server.use(staticMiddleware);

server.listen(8080, () => {
  console.log('Successfully connected to port 8080'); 
}); 

