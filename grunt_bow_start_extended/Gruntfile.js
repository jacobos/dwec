module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          'styles/file.min.css': "scss/info.scss", // comment the following two lines after running 'grunt' for the first time
      	  'styles/bootstrap.min.css': "bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap.scss",
          'styles/font-awesome.min.css': "bower_components/font-awesome/scss/font-awesome.scss",
        }
      }
    },
    jshint: {
      beforeconcat: ['js/file.js'],
      afterconcat: ['js/production.js']
    },
    watch: {
      css: {
        files: ['scss/*.scss', '**/*.scss'],
        tasks: ['sass'],
      },
      js: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
      },
      options: {
        livereload: true
      },
    },
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "localhost",
          //write the folder name here!!!
	  bases: ['/var/www/html/tareas_w/grunt/grunt_bow_start/.'],
          livereload: true
        }
      }
    },
    // grunt-open will open your browser at the project's URL
    // https://www.npmjs.org/package/grunt-open
    open: {
      all: {
        path: 'http://localhost:9000'
      }
    },
    concat: {
      dist: {
        src: [
         'js/file.js', 'js/file2.js' // All JS in the js folder
        ],
        dest: 'js/production.js',
      }
    },
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'js/production.min.js'
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('server', ['jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify', 'express', 'open', 'watch']);

};
