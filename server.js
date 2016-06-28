/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 8080;
const publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {
  // We require the bundler inside the if block because
  // it is only needed in a development environment.
  const bundle = require('./server/bundle.js'); // eslint-disable-line global-require
  bundle();

  // Any requests to localhost:8080/build is proxied
  // to webpack-dev-server
  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8000'
    });
  });
}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', (e) => {
  console.log('Could not connect to proxy, please try again...', e);
});

// Listens for connections and runs the server
app.listen(port, () => {
  console.log('Server running on port ', port);
});
