"use strict";

/*
* Enviroment parametrizable, Renderer, minifier
* and optimizer for the Olpays.com landing page.
* Gulp for task managment and NPM as a task runner. 
* No global dependencies :D
*
* Franco Poveda (fpoveda[at]olpays.com) - [4/2017]
*/

const gulp = require('gulp'),
    handlebars = require('handlebars'),
    gulpHandlebars = require('gulp-handlebars-html')(handlebars), //default to require('handlebars') if not provided
    minifyHtml = require("gulp-minify-html"),
    minifyCss = require("gulp-clean-css"),
    uglify = require("gulp-uglify"),
    imagemin = require('gulp-imagemin'),
    config = require('./config');

gulp.task('render-hbs', function () {
    var options = {
        partialsDirectory: ['./templates/partials']
    }
    return gulp.src('templates/*.html')
        .pipe(gulpHandlebars(config, options))
        .pipe(gulp.dest('dist'));
});

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
        .pipe(gulp.dest('./dist/assets/images/'))
);

gulp.task('cp-fonts', () =>
    gulp.src(['./assets/fonts/**/*'])
        .pipe(gulp.dest('./dist/assets/fonts/'))
);

gulp.task('cp-icons', () =>
    gulp.src(['./assets/icons/**/*'])
        .pipe(gulp.dest('./dist/assets/icons/'))
);