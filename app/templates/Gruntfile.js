/*jslint white:true, sloppy: true */
/*global module  */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /** grunt-contrib-less
     *
     */
    less: {
      "<%= djangoApp %>": {
        files: {
          '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/css/main.css' :
          'less/main.less'
        }
      }
    },
    /** grunt-swig
     *
     * JavaScript template engine. Uses Django template syntax and renders
     * against JSON instead of Python dicts.
     *
     */
    swig: {
      development: {
        init: {
            autoescape: true
        },
        dest: "<%= WEB_ROOT %>",
        src: [
          'templates/**/*.swig',
          '!templates/includes/**',
          '!templates/base.swig'
        ]
      }
    },
    /** grunt-contrib-watch
     *
     */
    watch: {
      "<%= djangoApp %>": {
        files: 'less/*.less',
        tasks: 'less:<%= djangoApp %>'
      },
      "swig": {
        files: [
          'templates/**/*.swig',
          'templates/**/*.json'
        ],
        tasks: 'swig'
      }
    },
    /** grunt-browser-sync
     *
     * For live css and js injection w/o triggering apage reload. Always keep
     * below grunt-contrib-watch.
     *
     */
    browser_sync: {
      bsFiles: {
        src : [
        '<%= WEB_ROOT %>/**/*.html',
        '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/css/**/*.css',
        '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/js/**/*.js'
        ]
      },
      options: {
        host: "127.0.0.1",
        watchTask: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-swig');

  grunt.registerTask('default', ["swig", "less"]);
  grunt.registerTask('track', ["browser_sync", "watch"]);

};