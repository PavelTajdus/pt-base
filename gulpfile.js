var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

// Ouptut destination for css and js
var fileDest = './dist';

gulp.task('sass', function () {
    return gulp.src('pt-base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(fileDest))
        .pipe(cleanCSS())
        .pipe(rename("pt-base.min.css"))
        .pipe(gulp.dest(fileDest));
});

gulp.task('default', ['sass'], function () {
    gulp.watch('**/*.scss', ['sass']);
});