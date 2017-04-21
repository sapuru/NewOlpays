 "use strict";

/*
* Enviroment parametrizable, Renderer, minifier
* and optimizer for the Olpays.com landing page.
* Gulp for task managment and NPM as a task runner. 
* No global dependencies :D
*
* Franco Poveda (fpoveda[at]olpays.com) - [4/2017]
*/

const gulp       = require('gulp'),
      mustache   = require('gulp-mustache'),
      minifyHtml = require("gulp-minify-html"),
      minifyCss  = require("gulp-minify-css"),
      uglify     = require("gulp-uglify"),
      imagemin   = require('gulp-imagemin'),
      config     = require('./config');


gulp.task('render-mustache',() =>
    gulp.src('templates/*')
        .pipe(mustache(config))
        .pipe(gulp.dest('./dist'))
);
 
gulp.task('minify-html', () =>
    gulp.src('./dist/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist'))
);

 
gulp.task('minify-css', () =>
    gulp.src('./assets/stylesheets/*.css') 
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/assets/stylesheets'))
);

gulp.task('minify-js', () =>
    gulp.src('./assets/javascripts/**/*.js') 
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/javascripts/'))
);

gulp.task('minify-img', () =>
    gulp.src('./assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
);