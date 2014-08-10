/*
 * js-lab build file.
 *
 * Copyright (c) 2014 George Norman
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *   http://www.apache.org/licenses/LICENSE-2.0
 */
module.exports = function(grunt) {
  'use strict';

  var bannerTemplate = '/*!\n' +
        '  ~ jsLab-<%= pkg.version %>.${EXT}\n' +
        '  ~ Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        '  ~ Licensed under the <%= pkg.license.type %>: <%= pkg.license.url %>\n' +
        '*/\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // https://github.com/gruntjs/grunt-contrib-clean
    clean: ["target", 'releases/<%= pkg.version %>'],

    // https://github.com/gruntjs/grunt-contrib-concat/blob/master/docs/concat-examples.md
    concat: {
      // concat all third-party libs, vendor libs, external libs, to: 'lib-fragment.[js,css]'
      libFragments: {
        files: {
          'target/js/lib-fragment.js': '<%= pkg.jsLabFiles.libJs %>',
          'target/css/lib-fragment.css': '<%= pkg.jsLabFiles.libCss %>'
        }
      },

      // concat all JS-Lab specific files to: 'jsLab-fragment.[js,css]'
      jsLabFragments: {
        files: {
          'target/js/jsLab-fragment.js': '<%= pkg.jsLabFiles.jsLabFragmentsJs %>',
          'target/css/jsLab-fragment.css': '<%= pkg.jsLabFiles.jsLabFragmentsCss %>'
        }
      },

      // concat all fragments, with prepended banner, to: 'jsLab-VERSION.[js,css]'
      jsLabCssFinal: {
        files: {
          'target/css/jsLab-<%= pkg.version %>.css': ['target/css/lib-fragment.css', 'target/css/jsLab-fragment.css']
        },
        options:{
          banner: bannerTemplate.replace(/\${EXT}/g, "css")
        }
      },
      jsLabJsFinal: {
        files: {
          'target/js/jsLab-<%= pkg.version %>.js': ['target/js/lib-fragment.js', 'target/js/jsLab-fragment.js']
        },
        options:{
          banner: bannerTemplate.replace(/\${EXT}/g, "js")
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      jsLab: {
        files: {
          'target/js/jsLab-<%= pkg.version %>-min.js': ['target/js/jsLab-<%= pkg.version %>.js']
        }
      },
      options: {
        preserveComments: 'some',
        sourceMap: true
      }
    },

    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      jsLab: {
        src: 'target/css/jsLab-<%= pkg.version %>.css',
        dest: 'target/css/jsLab-<%= pkg.version %>.css'
      }
    },

    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      jsLab: {
        files: {
          'target/css/jsLab-<%= pkg.version %>-min.css': ['target/css/jsLab-<%= pkg.version %>.css']
        }
      }
    },

    // https://github.com/yoniholmes/grunt-text-replace
    replace: {
      jsLab_root: {
        src: ['src/html/*.html'],
        dest: 'target/html/',
        // NOTE: release JS and CSS file names are all lowercase
        replacements: [{
          // use single minified file for PRD
          from: 'css/all-css.css',
          to: 'css/jslab-<%= pkg.version %>-min.css'
        }, {
          // use single minified file for PRD
          from: 'js/all-javascript.js',
          to: 'js/jslab-<%= pkg.version %>-min.js'
        }]
      },

      jsLab_bom: {
        src: ['src/html/bom/*.html'],
        dest: 'target/html/bom/',
        // NOTE: release JS and CSS file names are all lowercase
        replacements: [{
          // use single minified file for PRD
          from: 'css/all-css.css',
          to: 'css/jslab-<%= pkg.version %>-min.css'
        }, {
          // use single minified file for PRD
          from: 'js/all-javascript.js',
          to: 'js/jslab-<%= pkg.version %>-min.js'
        }]
      },

      jsLab_dom: {
        src: ['src/html/dom/*.html'],
        dest: 'target/html/dom/',
        // NOTE: release JS and CSS file names are all lowercase
        replacements: [{
          // use single minified file for PRD
          from: 'css/all-css.css',
          to: 'css/jslab-<%= pkg.version %>-min.css'
        }, {
          // use single minified file for PRD
          from: 'js/all-javascript.js',
          to: 'js/jslab-<%= pkg.version %>-min.js'
        }]
      }
    },

    // https://www.npmjs.org/package/grunt-contrib-copy
    copy: {
      // NOTE: release JS and CSS file names are all lowercase
      release: {
        files: [
          {expand: true, flatten: true, src: ['target/js/jslab-<%= pkg.version %>.js', 'target/js/jslab-<%= pkg.version %>-min.js'], dest: 'releases/<%= pkg.version %>/js/'},
          {expand: true, flatten: true, src: ['target/css/jslab-<%= pkg.version %>.css', 'target/css/jslab-<%= pkg.version %>-min.css'], dest: 'releases/<%= pkg.version %>/css/'},
          {expand: true, flatten: true, src: ['target/html/*.html'], dest: 'releases/<%= pkg.version %>/html/'},
          {expand: true, flatten: true, src: ['target/html/bom/*.html'], dest: 'releases/<%= pkg.version %>/html/bom/'},
          {expand: true, flatten: true, src: ['target/html/dom/*.html'], dest: 'releases/<%= pkg.version %>/html/dom/'},
          {expand: true, flatten: true, src: ['lib/img/*'], dest: 'releases/<%= pkg.version %>/img/'},
          {expand: true, flatten: true, src: ['lib/img/logo/*'], dest: 'releases/<%= pkg.version %>/img/logo/'},
          {expand: true, flatten: true, src: ['src/img/*'], dest: 'releases/<%= pkg.version %>/img/'},
          {expand: true, flatten: true, src: ['src/img/scenic/*'], dest: 'releases/<%= pkg.version %>/img/scenic/'}
        ]
      }
    },

    jsdoc : {
      dist : {
        src: ['src/js/*.js', 'test/*.js', 'src/js/README.md'],
        options: {
          destination: 'releases/<%= pkg.version %>/jsdoc'
        }
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-jsdoc');

  // register sub-tasks
  grunt.registerTask('assemble-fragments', ['concat:jsLabFragments', 'concat:libFragments']);
  grunt.registerTask('assemble-final', ['concat:jsLabCssFinal', 'concat:jsLabJsFinal']);

  // * replace doesn't appear to have an option to preserve directory structure - this gross and ugly hack does
  grunt.registerTask('replace-hack', ['replace:jsLab_root', 'replace:jsLab_bom', 'replace:jsLab_dom']);

  // register main task(s)
  grunt.registerTask('docs', ['jsdoc']);
  grunt.registerTask('release', ['clean', 'assemble-fragments', 'assemble-final', 'uglify:jsLab', 'autoprefixer:jsLab', 'cssmin:jsLab', 'replace-hack', 'copy:release', 'docs']);

  // register default task
  grunt.registerTask('default', ['release']);
};
