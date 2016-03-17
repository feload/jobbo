var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('build', function(){
    return gulp.src(['src/scripts/lib/zepto.min.js','src/scripts/alarm.js', 'src/scripts/main.js'])
        .pipe(concat('concat.js'))
        .pipe(rename('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('default', ['build'], function(){});