/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const routes = require('./server/routes');

const bodyParser = require('body-parser');
// It serves the files emitted from webpack over a connect server
const webpackMiddleware = require('webpack-dev-middleware');

/* This connects to the server to receive notifications when the bundle rebuilds
   and then updates client bundle accordingly.
*/
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = express();
const router = require('express').Router();

// ROUTES
app.use('/api', routes(router));

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(bodyParser.json());

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
  router(app);
} else {
  // applies if running on production mode
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
