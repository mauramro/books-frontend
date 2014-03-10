'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {

  //show elapset time at the end
  require('time-grunt')(grunt);

 ///load tasks
 require('load-grunt-tasks')(grunt);


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //  Watch
    watch:{

      css: {
        files: ['app/styles/css/{,*/}*.css'],
      },
       compass: {
        files: ['app/styles/scss/{,*/}*.scss'],

        tasks: ['compass:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          'app/**.html',
          'app/styles/css/{,*/}*.css',
          'app/styles/scss/{,*/}*.scss',
          'app/js/{,*/}*.js',
          'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },


    /*compass: {
        options: {
            sassDir: 'app/styles/sass',*/


      //Compass
    compass: {
        options: {
            sassDir: 'app/styles/scss',

            cssDir: 'app/styles/css',
            generatedImagesDir: 'app/img',
            imagesDir: 'app/img',
            javascriptsDir: 'app/js',
            fontsDir: 'app/css/fonts',
            importPath: 'app/js/vendor',
            httpImagesPath: 'app/img',
            httpGeneratedImagesPath: 'app/img',
            httpFontsPath: 'app/css/fonts',
            relativeAssets: true,
            noLineComments: false
        },
        server: {
            options: {
              debugInfo: false
            }
        }
    },

      //Web server
    connect: {
      server: {
        options: {
          /*hostname:'localhost',*/
          base: 'app',
          livereload: true,
          open:true
          }
        }
      },

   /* mochacli: {
      src : 'test/test.js',
      options: {
        reporter: 'spec'
       /* bail: true
      }
    }*/



      //Build
    uglify: {
      target: {
        files: {
          'app/js/main.min.js' : ['app/js/main.js']
        }
      }
    },
    cssmin : {
      combine :{
         files: {
        'app/styles/css/skeleton.min.css' : ['app/styles/css/skeleton.css']
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    mochaTest: {
      test: {
        options: {
          require: ['chai'],
          reporter: 'spec'
        },
        src: ['test/spec/test.spec.js']
      }
    }
  });


  // Default task(s).
  /*grunt.registerTask('default', ['uglify']);*/

  grunt.registerTask('server', ['connect', 'watch']);

  grunt.registerTask('test', ['mochacli']);

  grunt.registerTask('build', ['uglify', 'cssmin']);
  grunt.registerTask('kar', ['karma']);
  grunt.registerTask('test', ['mochaTest']);



};
