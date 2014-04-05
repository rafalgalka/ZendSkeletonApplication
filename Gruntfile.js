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
                basePath: '<%= path.assets %>',
                sassDir: 'scss',
                javascriptsDir: 'js',
                cssDir: 'css',
                cacheDir: '../data/cache/.sass',
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
