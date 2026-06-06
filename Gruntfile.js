//this file is for hossein ghaem


// Load Grunt
const mozjpeg = require('imagemin-mozjpeg');


module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Tasks
    sass: { // Begin Sass Plugin
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [
          {
            src: ['files/sass/styles.scss'],
            dest: 'files/css/styles.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-1.scss'],
            dest: 'files/css/styles-header-1.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-2.scss'],
            dest: 'files/css/styles-header-2.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-3.scss'],
            dest: 'files/css/styles-header-3.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-4.scss'],
            dest: 'files/css/styles-header-4.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-5.scss'],
            dest: 'files/css/styles-header-5.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-6.scss'],
            dest: 'files/css/styles-header-6.css',
            ext: '.css'
          },
          {
            src: ['files/sass/styles-header-7.scss'],
            dest: 'files/css/styles-header-7.css',
            ext: '.css'
          },
        ]
      }
    },
    postcss: { // Begin Post CSS Plugin
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            Browserslist: ['last 50 versions']
          })
        ]
      },
      dist: {
        src: 'files/css/styles.css'
      }
    },
    // imageEmbed: {
    //   dist: {
    //     src: [ "files/css/styles.css" ],
    //     dest: "files/css/styles.css",
    //     options: {
    //       deleteAfterEncoding : false,
    //       preEncodeCallback: function (filename) { return true; }
    //     }
    //   }
    // },    
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          src: [
            // 'files/css/bootstrap.min.css',
            // 'files/css/bootstrap-rtl.min.css',
            'files/build/temp/icons.css',
            

            //plugins
            // 'files/plugins/owl-carousel/css/owl.carousel.min.css',  

            

            'files/css/styles.css'
          ],
          dest: 'files/build/css/styles.min.css',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}]//,
          //use: [mozjpeg()] // Example plugin usage
          //use: [imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()]
        },
        files: [{
          expand: true,
          cwd: "files/images/",
          src: "**/*.{gif,GIF,jpg,JPG,png,PNG,svg,SVG}",
          dest: "files/build/images/"
        }]
      }
    },

    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          }, {
            removeUselessStrokeAndFill: false
          }, {
            removeAttrs: {
              attrs: ['xmlns']
            }
          }
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: "files/images/",
          src: "**/*.{svg,SVG}",
          dest: "files/build/images/"
        }]
      }
    },
    svgstore: {
      dist: {
        files: {
          // 'svgs/build/svg-defs.svg': ['svgs/*.svg']
          'files/build/svg-defs.svg': ['files/images/svg/*.svg']
        },
      },
      options: {
        cleanup: false
      }
    },
    webfont: {
      icons: {
        src: 'files/icons/*.svg',
        dest: 'files/build/fonts',
        options: {
          fontFamilyName: 'custome-fonts',
          fontFilename: 'nyn05',
          destCss: 'files/build/temp/',
          types: 'woff2,woff,eot',
          htmlDemo: false,
          ie7: true,
          //template: 'files/icons/templates/templates.css',
          templateOptions: {
            baseClass: 'nf',
            classPrefix: 'icon-'
          }
        }
      }
    },
    concat: {
      options: {
        separator: ';\n',
      },
      dist: {
        src: [

              'files/js/jquery-1.11.2.min.js',
              'files/js/bootstrap.min.js',


              //plugins
              // 'files/plugins/owl-carousel/js/owl.carousel.min.js',
             

             

              //our scripts
              'files/js/nayan.js'
        ],
        dest: 'files/js/nyn05.js',
      },
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
        src: ['files/js/nyn05.js'],
        dest: 'files/build/js/script.min.js'
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', /*'imageEmbed' ,*/ 'cssmin']
      },
      js: {
        files: 'files/js/nayan.js',
        tasks: ['concat','uglify']
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-webfont');
  //grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks("grunt-image-embed");
  require('load-grunt-tasks')(grunt);


  // Register Grunt tasks

  grunt.registerTask('default', [ 'webfont' ,/*  'imagemin' , 'svgmin' , 'svgstore' , */'imagemin' ,  'concat'  , 'uglify' , 'cssmin' ,   'watch' ]);

};
