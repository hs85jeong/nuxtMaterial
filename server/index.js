const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const server = express();

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '3000';

server.use(bodyParser());
server.use(cookieParser());

// Import Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
server.use(nuxt.render);

// Listen the server
server.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
