module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'source/jpg/',
                    src: ['*.{jpg,jpeg}'],
                    dest: 'build/jpg/'
                }]
            },
            png: {
                options: {
                    optimizationLevel: 4
                },
                files: [{
                    expand: true,
                    cwd: 'source/png/',
                    src: ['*.png'],
                    dest: 'build/png/'
                }]
            },
            gif: {
                options: {
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'source/gif/',
                    src: ['*.gif'],
                    dest: 'build/gif/'
                }]
            },
            svg: {
                options: {
                    svgoPlugins: [
                        {
                            /* merge multiple Paths into one */
                            mergePaths: false
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'source/svg/',
                    src: ['*.svg'],
                    dest: 'build/svg/'
                }]
            }
        },
        grunticon: {
            production: {
                files: [{
                    expand: true,
                    cwd: 'source/icons',
                    src: ['*.svg'],
                    dest: "build/icons"
                }],
                options: {
                }
            }
        }
    });
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-grunticon');
    // Task(s)
    grunt.registerTask('default', ['grunticon', 'imagemin']);
};