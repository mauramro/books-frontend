
// Karma configuration
// Generated on Sun Jan 25 2014 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '.',


    // frameworks to use
    frameworks: ['mocha', 'chai', 'sinon'],

    hostname: '127.0.0.1',


    // list of files / patterns to load in the browser
    files: [
        // {pattern: 'js/**/*.js', included: false},
        // {pattern: 'src/**/*.js', included: false},
        // {pattern: 'test/**/*Spec.js', included: false}

        /*'app/bower_components/jquery/jquery.js',
        'app/js/app.conf.js',
        'app/js/models/*.js',*/

        // tests
        /*'test/spec/models/*.spec.js'*/
        'test/spec/test.spec.js'
    ],


    // list of files to exclude
    exclude: [
        // 'src/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage',
    // or
    // 'html', 'spec'
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome','Firefox','Safari','PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
