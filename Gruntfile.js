'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //  Watch
    watch:{
      css: {
        files: ['app/styles/css/{,*/}*.css'],
      },
       compass: {
        files: ['app/styles/sass/{,*/}*.scss'],
        tasks: ['compass:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          'app/**.html',
          'app/styles/css/{,*/}*.css',
          'app/styles/sass/{,*/}*.scss',
          'app/js/{,*/}*.js',
          'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

      //Sass
    compass: {
        options: {
            sassDir: 'app/styles/sass',
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
          hostname:'127.0.0.1',
          base: 'app',
          livereload: true,
          open:true
          }
        },
      },
  });

  //Web Server
  /*grunt.loadNpmTasks('connect-livereload');*/
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  //Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  /*grunt.registerTask('default', ['uglify']);*/

  grunt.registerTask('server', ['connect', 'watch']);


};