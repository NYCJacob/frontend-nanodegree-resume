/*
 This is our Grunt Wrapper, this tells node we are using grunt!
 */
module.exports = function (grunt) {
    //  Load our Grunt Tasks
    // loadNpmTasks removed and installed load tasks plugin
    require('load-grunt-tasks')(grunt);

    // Configure our tasks

    grunt.initConfig({
        concat:{
            dist: {
                src: ['src/js-src/*js', '!src/js-src/bootstrap.min.js'],
                dest: 'js/deploy-script.js'
            }
        },
        
        responsive_images: {
            myTask: {
                options: {
                    aspectRatio: false,
                    sizes: [
                        {
                        name:'320',
                        width: 320,
                        height: 160
                        }
                    ]
                },
                files: [{
                    expand: true,
                    // src: ['assets/**.{jpg,gif,png}'],
                    src: '**.{jpg,gif,png}',
                    cwd: 'dev/devImages/',
                    dest: 'images/'
                }]
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }]
                    // use: [mozjpeg()]
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'images',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'images/'                  // Destination path prefix
                }]
            }
        },
        validation: {
            options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'], //ignores these errors
                generateReport: true,
                errorHTMLRootDir: 'w3cErrors',
                useTimeStamp: true,
                errorTemplate: 'error_template.html'
            },
            files: {
                src: 'index.html'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: 'styles.css',
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        }

    });

     // Register our tasks

    grunt.registerTask('default', [
         'concat', 'responsive_images', 'imagemin', 'validation', 'cssmin']);
};