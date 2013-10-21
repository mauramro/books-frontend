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
      sass: {
        files: ['app/styles/sass/{,*/}*.scss'],
        tasks: ['sass:compile'],
        options: {
          livereload:true,
        }
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
    sass: {
      compile: {
        options: {
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: 'app/styles/sass',
          src: ['*.scss'],
          dest: 'app/styles/css',
          ext: '.css'
        }]
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
  grunt.loadNpmTasks('connect-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  //Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  /*grunt.registerTask('default', ['uglify']);*/

  grunt.registerTask('server', ['connect', 'watch']);


};