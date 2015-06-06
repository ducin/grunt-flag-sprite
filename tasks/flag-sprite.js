'use strict';

/**
 * grunt-flag-sprite is a Grunt plugin for generating national flag sprites
 *
 * @see https://github.com/ducin/grunt-flag-sprite
 *
 * @author Tomasz Ducin <tomasz.ducin@gmail.com> (https://github.com/ducin)
 * @copyright © 2015 Tomasz Ducin
 * @license MIT https://raw.github.com/ducin/grunt-flag-sprite/master/LICENSE
 */

var path = require('path'),
    allowedFormats = ['1x1', '4x3'];

module.exports = function (grunt) {
    grunt.registerMultiTask('flag_sprite', '', function () {
        var flagpath = 'node_modules/flag-svg-collection/flags/',
            options = this.options(),
            flags = options.flags,
            format = options.format;
        if (!flags || flags.length === 0) {
            grunt.fail.warn('Incorrect flags. Set flags array.');
        }
        if (!format || allowedFormats.indexOf(format) < 0) {
            grunt.fail.warn('Incorrect format. Choose one of: ' + allowedFormats.join(', ') + '.');
        }
        // this.requiresConfig ??
        // validate format: either 1x1 or 4x3
        // validate flags: exist
        var sources = flags.map(function(flag) {
            return path.normalize(flagpath + format + '/' + flag + '.svg');
        });
        grunt.log.oklns('Generating sprite for flags: ' + flags.join(', '));

//        console.log(this.files);
//        console.log(this.filesSrc);
        grunt.config('svg_sprite', { // grunt.config.merge ??
            flags: {
                src: sources,
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
        grunt.task.run('svg_sprite:flags');
    });

    grunt.loadNpmTasks('grunt-svg-sprite');
};
