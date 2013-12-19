// Generated on 2013-10-08 using generator-webapp 0.4.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.initConfig({
        // configurable paths
        pkg:grunt.file.readJSON('package.json'),
        yeoman: {
            app: 'app',
            dist: 'dist'
        },
        watch:{
            views: {
                files: [
                    '<%= yeoman.app %>/views/**/*.html',
                    '<%= yeoman.app %>/index.html'
                ],
                tasks: ['copy:to_tmp','copy:from_tmp_to_app_cdn'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            scripts: {
                files: [
                    '<%= yeoman.app %>/scripts/**/*.js',
                    '<%= yeoman.app %>/scripts/**/*.coffee'
                ],
                tasks: ['copy:to_tmp','coffee:to_tmp','copy:from_tmp_to_app_cdn'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            images: {
                files: ['<%= yeoman.app %>/images/**/*.*'],
                tasks: ['local'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/**/*.*','<%= yeoman.app %>/sass/**/*.*'],
                tasks: ['compass:to_tmp','copy:from_tmp_to_app_cdn'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            node:{
                files: ['<%= yeoman.app %>/src/**/*.*'
                    ,'<%= yeoman.app %>/pages/**/*.*'
                    ,'<%= yeoman.app %>/server.js'
                ],
                options: {
                    spawn: false,
                    livereload:true
                },
                tasks:["htmlmin:to_tmp",'copy:from_tmp_to_app_cdn']
            }
        },
        nodemon:{
            dev:{
                options:{
                    file: '<%= yeoman.app %>/server.js',
                    watchedExtensions: ['js','ejs'],
                    watchedFolders: ['app/pages/', 'app/src/','app/'],
                    ignoredFiles:["app/cdn/**/*.*"]
                }
            }
        },
        clean: {
            deploy: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            local: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.app %>/cdn/*',
                    ]
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= yeoman.app %>/sass',
                    cssDir: '.tmp/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: '<%= yeoman.app %>/bower_components',
                    httpImagesPath: '/cdn/images',
                    httpGeneratedImagesPath: '/cdn/images/generated',
                    httpFontsPath: '/cdn/styles/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false
                }
            },
            to_tmp: {
                options: {
                    sassDir: '<%= yeoman.app %>/sass',
                    cssDir: '.tmp/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: '<%= yeoman.app %>/bower_components',
                    httpImagesPath: '/cdn/images',
                    httpGeneratedImagesPath: '/cdn/images/generated',
                    httpFontsPath: '/cdn/styles/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            in_tmp: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles-autoprefixed/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
         dist: {}
         },*/

        imagemin: {
            to_tmp: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '.tmp/images'
                }]
            }
        },
        svgmin: {
            to_tmp: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '.tmp/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/cdn/styles/main.<%=pkg.version%>.css': [
                        '.tmp/styles-autoprefixed/bootstrap.css',
                        '.tmp/styles-autoprefixed/main.css'
                    ]
                }
            }
        },
        htmlmin: {
            to_tmp: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: false,
                    removeRedundantAttributes: true,
                    useShortDoctype: false,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/pages/',
                    src: '**.ejs',
                    dest: '.tmp/pages/'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            app_to_dist:{
                expand: true,
                dot: true,
                cwd:"app/",
                dest: 'dist/',
                src:'**/*.*'
            },
            to_tmp: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>',
                dest: '.tmp/',
                src: [
                    'bower_components/**/*',
                    'styles/{,*/}*.css',
                    'views/{,*/}*.html',
                    'scripts/{,*/}*.js',
                    'images/{,*/}*.{webp,gif}',
                    'styles/fonts/{,*/}*.*',
                ]
            },
            from_tmp_to_app_cdn:{
                expand: true,
                dot: true,
                cwd: '.tmp/',
                dest: '<%= yeoman.app %>/cdn',
                src: '**/*.*'
            }
        },
        coffee:{
            to_tmp:{
                expand: true,
                flatten: true,
                cwd: '<%= yeoman.app %>/scripts',
                dest: '.tmp/scripts/',
                src: ['*.coffee'],
                ext: '.js'
            }
        },
        concurrent: {
            dist: [
                'compass',
                'copy:styles',
                'imagemin',
                'svgmin'
                //'htmlmin'
            ],
            to_tmp:[
                'compass:to_tmp',
                'imagemin:to_tmp',
                'svgmin:to_tmp',
                'htmlmin:to_tmp',
                'coffee:to_tmp',
                'copy:to_tmp'
            ],
            dev: {
                tasks: [ 'watch','nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            },
            min_css_js:[
                'uglify:tmp_to_dist',
                'cssmin:dist'
            ]
        },
        uglify:{
            tmp_to_dist:{
                files:{
                    'dist/cdn/openart.<%=pkg.version %>.min.js':[
                        ".tmp/bower_components/jquery/jquery.js",
                        ".tmp/bower_components/angular/angular.js",
                        ".tmp/bower_components/angular-resource/angular-resource.js",
                        ".tmp/bower_components/angular-route/angular-route.js",
                        ".tmp/scripts/app.js",
                        ".tmp/scripts/controllers/*.js",
                        ".tmp/scripts/directives/*.js",
                        ".tmp/scripts/services/*.js"
                       ]
                }
            }
        },
        replace:{
            css:{
                src:['dist/index.html'],
                overwrite:true,
                replacements:[
                    {from:/.*\/cdn.*/g, to:''},
                    {from:'helloworld', to:'bye'},
                    {from:'<!-- main -->', to:'<link rel="stylesheet" href="/cdn/styles/main.<%=pkg.version%>.css" />'}
                ]
            },
            js:{
                src:['dist/index.html'],
                overwrite:true,
                replacements:[
                    {from:/<script.*\/cdn.*/g, to:''},
                    {from:/<script.*local.*/g, to:''},
                    {from:'<!-- main -->', to:'<script src="/cdn/hellopics.<%=pkg.version %>.min.js"></script>'}
                ]
            }
        }

    });

    grunt.registerTask('local', [
        'clean:local',
        'concurrent:to_tmp',
        'autoprefixer',
        'copy:from_tmp_to_app_cdn'
    ]);

    grunt.registerTask('dist', [
        'clean:deploy',
        'local',
        'copy:app_to_dist',
        'concurrent:min_css_js',
        'replace:js',
        'replace:css'
    ]);

    grunt.registerTask('default', [
        'local'
    ]);

    grunt.registerTask('dev',[
        'local',
        'concurrent:dev'
    ]);
};
