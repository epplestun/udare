module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          // vendor libs
          'lib/q/q.min.js',
          'lib/handlebars.js/dist/handlebars.js',

          //'lib/Watch.JS/src/watch.js',
          //'lib/hogan.js/dist/hogan-3.0.0.min.mustache.js',

          // project sources
          'src/udare.js',
          'src/udare.utils.js',
          'src/udare.expressions.js',
          'src/udare.module.js',
          'src/udare.scope.js',
          'src/udare.events.js',
          'src/udare.controller.js',
          'src/udare.view.js',
          'src/udare.request.js',
          'src/udare.routerProvider.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }      
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: "gzip"
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    clean : ['dist']
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};
