/// <binding BeforeBuild='copy:libs, compress' />
var gulp = require('gulp');
var npmDist = require('gulp-npm-dist');
var rename = require('gulp-rename');

gulp.task('copy:libs', function () {
    gulp.src(npmDist(), { base: './node_modules/' })
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
        }))
        .pipe(gulp.dest('./wwwroot/libs'));
});

const minify = require('gulp-minify');

gulp.task('compress', function () {
    gulp.src(['./wwwroot/js/*.js'])
        .pipe(minify({
            ext: {
                src: '.org.js',
                min: '.min.js'
            },            
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulp.dest('./wwwroot/js/min'))  
});