'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css');



    gulp.task('script', function() {
    return gulp.src('./src/js/components/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src/js/'));
    });

   
   gulp.task('script:build', function() {
    return gulp.src('./src/js/main.js')
    .pipe(uglify()) 
    .pipe(gulp.dest('./build/js'));
    });




gulp.task('style:build', function (success, error) {
    return gulp.src('./src/scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build', [
    'script',
    'script:build',
    'style:build'
]);


gulp.task('default', ['build']);


