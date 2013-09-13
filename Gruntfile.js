module.exports = function (grunt) {

	grunt.initConfig({

		watch: {
			md: {
				files: ['docs/**/*.md'],
				tasks: ['concat:md']
			}
		},
		concat: {
			md: {
				options: {
					separator: '\r\n\r\n',
					process: function(src, filepath) {
						return src.replace(/..\/img/gi, './img');
					}
				},
				src: ['docs/**/*.md'],
				dest: 'README.md'
			}
		}
	});

	// Load the plugin.;
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};