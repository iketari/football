module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
        files: ['Gruntfile.js', 'assets/**/*.js'],
        options: {
            globals: {
                jQuery: true
            }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        stylus: {
            compile: {
                files: {
                    'assets/style/main.css': 'assets/style/main.styl'
                }    
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};
