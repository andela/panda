const webPack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../webpack.config.js');

module.exports = () => {
  // First we fire up Webpack an pass in the configuration we
  // created
  let bundleStart = null;
  const compiler = webPack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', () => {
    return ('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', () => {
    console.log('Bundled in ', (Date.now() - bundleStart), 'ms!');
  });

  const bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:8080/build -> http://localhost:8000/build
    publicPath: '/build/',

    // Configure hot replacement
    hot: true,

    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(8000, 'localhost', () => {
    console.log('Bundling project, please wait...');
  });
};
