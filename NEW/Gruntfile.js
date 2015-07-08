module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: ['css/assets/normalize.min.css', 'css/assets/main.css'],
        dest: 'css/build.css'
      },
      less: {
        src: ['css/assets/less/base.less', 'css/assets/less/theme_light.less', 'css/assets/less/theme_dark.less', 'css/assets/less/theme_ncaa.less'],
        dest: 'css/assets/main.less'
      }
    },
    cssmin: {
      add_banner: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'css/build.min.css': ['css/build.css']
        }
      }
    },
    uglify: {
      build: {
        src: ['js/assets/main.js'],
        dest: 'js/build.min.js'
      }
    },
    less: {
      development: {
        files: {
          'css/assets/main.css': 'css/assets/main.less'
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/assets/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ['css/assets/*.css'],
        tasks: ['concat:css', 'cssmin'],
        options: {
          spawn: false,
        },
      },
      less: {
        files: ['css/assets/less/*.less'],
        tasks: ['concat:less', 'less', 'concat:css', 'cssmin'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);

};