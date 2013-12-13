/*jslint white:true, sloppy: true */
/*global module  */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * For compiling the less files
     */
    less: {
    /**
     * For watching changes on file save
     */
      "<%= djangoApp %>": {
        files: {
          '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/css/main.css' :
          '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/less/main.less'
        }
      }
    },
    watch: {
      "<%= djangoApp %>": {
        files: '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/less/*.less',
        tasks: 'less:<%= djangoApp %>'
      }
    },
    /**
     * For live reloading the css and js
     */
    browser_sync: {
        files: {
            src : [
              '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/css/**/*.css',
              '<%= WEB_ROOT %><%= STATIC_URL %><%= djangoApp %>/js/**/*.js'
            ]
        },
        options: {
            watchTask: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ["browser_sync", "watch"]);

};