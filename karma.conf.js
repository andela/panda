// Karma configuration
// Generated on Fri Jul 08 2016 14:11:24 GMT+0300 (EAT)

// reference webpack
const webpackConfig = require('./webpack.config.js');
const path = require('path');
webpackConfig.devtool = 'inline-source-map';


// remove the entry point
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      path.join(__dirname, 'app/main.js'),
      'tests/client/**/*[sS]pec.js'
    ],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/main.js': ['webpack', 'coverage'],
      'test/client/**/[sS]pec.js': ['webpack', 'sourcemap']
    },

    webpack:   webpackConfig,
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration




    webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
  },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

  });
};
