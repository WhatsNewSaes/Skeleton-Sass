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

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass', 'watch']);
};
