/**
 * Gulp file for concatenating and uglifying.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('main', function(){

    // I know there are better ways of doing this...
    // I'll clean this ugly list as soon as possible.
    return gulp.src(['src/scripts/lib/zepto.min.js',
        'src/scripts/modules/notifier.js',
        'src/scripts/modules/finder.js',
        'src/scripts/modules/alarm.js',
        'src/scripts/modules/app.js',
        'src/scripts/main.js'])
        .pipe(concat('concat.js'))
        .pipe(rename('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));

});

gulp.task('default', ['main'], function(){});