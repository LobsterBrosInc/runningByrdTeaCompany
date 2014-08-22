module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
       build: {
         src: [
           'src/css/*.scss',
         ],
         dest: 'build/css/build.scss',
       },
       src: {
         src: [
           'src/css/*.scss',
         ],
         dest: 'src/css/build.scss',
       },
     },
     htmlmin: {                                     // Task
       build: {                                      // Target
         options: {                                 // Target options
           removeComments: true,
           collapseWhitespace: true
         },
         files: {                                   // Dictionary of files
           'build/runningbyrd.html': 'src/runningbyrd.html'
         }
       }
     },
     uglify: {
       buildScripts: {
         src: 'src/scripts/*.js',
         dest: 'build/scripts.min.js'
       },
       buildLibs: {
         src: 'src/libs/*.js',
         dest: 'build/libs.min.js'
       },
       srcScripts: {
         src: 'src/scripts/*.js',
         dest: 'src/scripts.min.js'
       },
       srcLibs: {
         src: 'src/libs/*.js',
         dest: 'src/libs.min.js'
       }
     },
    sass: {
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/style.css': 'build/css/build.scss'
        }
      },
      src: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/css/style.css': 'src/css/build.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['default'],
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'htmlmin', 'uglify', 'sass']);

};