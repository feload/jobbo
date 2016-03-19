var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('main', function(){
    return gulp.src(['src/scripts/lib/zepto.min.js',
        'src/scripts/modules/notifier.js',
        'src/scripts/modules/finder.js',
        'src/scripts/modules/alarm.js',
        'src/scripts/modules/app.js',
        'src/scripts/main.js'])
        .pipe(concat('concat.js'))
        .pipe(rename('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('default', ['main'], function(){});