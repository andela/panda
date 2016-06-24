const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'app', 'main.js');

const config = {
  // maps to compiled source code per module so that
  // errors map to correct file and line number
  devtool: 'eval',
  entry: [

    // checks for changes in source code and rebuilds only the changed modules
    // (Hot Module Replacement)
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8000',

    // Our application
    mainPath,
  ],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: 'bundle.js',

    // // writes to disk: ./build/bundle.js
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/',
  },
  module: {

    loaders: [

      // The babel-loader gives you
      // ES6/7 syntax and JSX transpiling out of the box
      {
        test: /\.js$/,
        loader: 'babel-core',
        exclude: [nodeModulesPath],
      },

      // style-loader and css-loader
      {
        test: /\.css$/,
        loader: 'style!css',
      },

    ],
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [new Webpack.HotModuleReplacementPlugin()],
};

module.exports = config;
