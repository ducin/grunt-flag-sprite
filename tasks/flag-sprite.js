'use strict';

/**
 * grunt-flag-sprite is a Grunt plugin for generating national flag sprites
 *
 * @see https://github.com/tkoomzaaskz/grunt-flag-sprite
 *
 * @author Tomasz Ducin <tomasz.ducin@gmail.com> (https://github.com/tkoomzaaskz)
 * @copyright © 2015 Tomasz Ducin
 * @license MIT https://raw.github.com/tkoomzaaskz/grunt-flag-sprite/master/LICENSE
 */

module.exports = function (grunt) {
    grunt.config('svg_sprite', {
        flags: {
            src: [
                'node_modules/flag-svg-collection/flags/4x3/pl.svg',
                'node_modules/flag-svg-collection/flags/4x3/de.svg',
                'node_modules/flag-svg-collection/flags/4x3/us.svg',
                'node_modules/flag-svg-collection/flags/4x3/gb.svg',
            ],
            dest: 'flags',
            options: {
                mode: {
                    css: {// Activate the «css» mode
                        render: {
                            css: true,
                            scss: true,
                            styl: true,
                            less: true
                        }
                    }
                }
            }
        }
    });

    grunt.registerMultiTask('flag-sprite', '', function () {
        grunt.task.run('svg_sprite:flags');
    });

    grunt.loadNpmTasks('grunt-svg-sprite');
};
