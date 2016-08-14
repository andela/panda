const path = require('path'); // webpack doesn't use relative file
const webpack = require('webpack'); // import webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates html page
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  /* maps to compiled source code per module so that
     errors map to correct file and line number
  */
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', // allows hot reloading
    path.join(__dirname, 'app/main.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]',
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html', // load a custom template
      inject: 'body', //inject all scripts into the body
      filename: 'index.html' // it is generated by default by the Plugin
    }),
    // reduces file size by providing shorter ids to frequently used modules and chunks
    new webpack.optimize.OccurenceOrderPlugin(),

    // Generates Hot Update Chunks of each chunk in the records.
    new webpack.HotModuleReplacementPlugin(),

    // this ensures the emmiting stage is skipped once an error is encountered during compiling
    new webpack.NoErrorsPlugin(),

    // this allows declaring global constants
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015', 'stage-0', 'react-hmre']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }]
  }
};
