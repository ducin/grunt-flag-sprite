/*
 * grunt-flag-sprite
 * https://github.com/ducin/grunt-flag-sprite
 *
 * Copyright (c) 2015 Tomasz Ducin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the 'test' task is run, first run jshint, clean the placeholder,
  // then run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', /*'clean', 'flag_sprite', 'nodeunit'*/]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', /*'test', */'build-contrib']);
};
