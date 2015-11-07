module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "css/skeleton.css": "scss/skeleton.scss"
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'bower_components/normalize-css/',
                src: 'normalize.css',
                dest: 'scss/',
                flatten: true
            },
        },

        rename: {
            main: {
                src: 'scss/normalize.css',
                dest: 'scss/_normalize.scss'
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['copy', 'rename', 'sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.registerTask('default', ['copy', 'rename', 'sass', 'watch']);
};
