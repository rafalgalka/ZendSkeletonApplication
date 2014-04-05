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
        },
        watch: {
            compass: {
                files: [
                    '<%= path.assets %>/scss/**/*.scss',
                    '<%= path.assets %>/images/sprites/**/*.png'
                ],
                tasks: ['compass:dev']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= path.assets %>/css/*.css',
                    '<%= path.assets %>/js/**/*.js',
                    'module/**/view/**/*.phtml'
                ]
            }
        },
        clean: {
            dist: [
                '<%= compass.options.cssDir %>/*.css',
                '<%= compass.options.imagesDir %>/sprites/*.png',
                '<%= path.dist %>/**'
            ]
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.',
                    dest: '<%= path.dist %>',
                    src: [
                        '**',
                        '!.*/**',
                        '!*.bowerrc',
                        '!*.gitignore',
                        '!*.json',
                        '!*.lock',
                        '!*.js',
                        '!*.iml',
                        '!LICENSE.txt',
                        '!README.md',
                        '!<%= path.assets %>/scss/**',
                        '!nbproject/**',
                        '!node_modules/**',
                        '!data/cache/*',
                        '!data/tmp/*',
                        '!tests/**',
                        '!vendor/**/tests/**',
                        '!vendor/**/test/**',
                        '!vendor/**/unitTests/**',
                        '!vendor/**/examples/**',
                        '!vendor/**/Examples/**',
                        '!vendor/**/demos/**',
                        '!vendor/**/documentation/**'
                    ]
                }]
            }
        },
        useminPrepare: {
            html: 'module/**/view/**/*.phtml',
            options: {
                root: '<%= path.dist %>',
                staging: 'data/tmp'
            }
        },
        usemin: {
            html: ['<%= path.dist %>/module/**/view/**/*.phtml']
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'copy:dist',
        'useminPrepare',
        'concat',
        'uglify',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
