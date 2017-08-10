const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');

gulp.task('default', () => {
    gulp.start('prefixa');
});

gulp.task('oi', () => {
    console.log('Ola Mundo Cruel!!!');
});

gulp.task('limpa', () => {
    return del('build');
});

gulp.task('copia', ['limpa'], () => {
    return gulp.src('src/**/*').pipe(gulp.dest('build'));
});

gulp.task('sass', ['copia'], () => {
    return gulp.src('build/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('prefixa', ['sass'], () => {
    return gulp.src('build/css/*.css')
        .pipe(autoprefixer({
            browsers: [
                'Firefox>=29',
                'Chrome>=42',
                'IE>=10'
            ]
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('minifica', ['prefixa'], () => {
    return gulp.src('build/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('build'));
});