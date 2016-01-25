
(function(){
    module.exports = function(grunt){
        require('load-grunt-tasks')(grunt);

        grunt.initConfig({
            jshint: {
                options: {
                    jshintrc: true
                },
                app:[
                    'app/**/*.js'
                ],
                arquitetura:[
                    'arquitetura/**/*.js'
                ]
            },
            copy :{
                delta : {
                    src : [
                        '*.html',
                        'app/**',
                        'arquitetura/**'
                    ],
                    dest : 'build/'
                }
            },
            concat : {
                js : {
                    src : [
                        'build/app/js/delta-config.js',
                        'build/app/**/*.js',
                        'build/arquitetura/**/*.js',
                    ],
                    dest : 'build/source.js'

                },
                css : {
                    src : [
                        'build/app/**/*.css',
                        'build/arquitetura/**/*.css',
                    ],
                    dest : 'build/source.css'
                }
            },
            clean : {
                build : {
                    src : 'build'
                }
            },
            ngAnnotate : {
                options : {
                    singleQuotes : true
                },
                app :{
                    files : [
                        {
                            expand : true,
                            src : ['build/**/*.js']
                        }
                    ]
                }
            },
            uglify : {
                build : {
                    expand : true,
                    src : 'build/source.js'
                }
            },
            cssmin : {
                build : {
                    expand : true,
                    src : 'build/source.css'
                }
            },
            htmlmin : {
                options : {
                    removeComments : true,
                    collapseWhitespace : true
                },
                build : {
                    expand : true,
                    src : ['build/**/*.html']
                }
            },
            autoprefixer : {
                options : {
                    remove : false
                },
                build : {
                    expand : true,
                    src : 'build/source.css'
                }
            },
        });

        grunt.registerTask('build', ['clean:build', 'copy','ngAnnotate','concat','autoprefixer','uglify','cssmin','htmlmin'
        ]);
    };
})();