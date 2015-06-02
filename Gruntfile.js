module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'src/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    // Test
    grunt.registerTask('test', ['jshint']);

    // Default task(s).
    grunt.registerTask('default', ['jshint']);
};
