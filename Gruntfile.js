'use strict';

module.exports = function (grunt) {
    // load all installed grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        path: {
            assets: 'public',
            dist: 'dist'
        },
        package: grunt.file.readJSON('package.json'),
        compass: {
            options: {
                sassDir: '<%= path.assets %>/scss',
                imagesDir: '<%= path.assets %>/images',
                javascriptsDir: '<%= path.assets %>/js',
                fontsDir: '<%= path.assets %>/fonts',
                cssDir: '<%= path.assets %>/css',
                cacheDir: 'data/cache/.sass',
                importPath: [
                    'vendor/bootstrap-sass/vendor/assets/stylesheets'
                ]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                }

            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                }
            }
        }
    });
};
