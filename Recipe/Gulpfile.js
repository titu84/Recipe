/// <binding BeforeBuild='a_copy:libs, b_bundle, c_compress' />
var gulp = require('gulp');
var npmDist = require('gulp-npm-dist');
var rename = require('gulp-rename');

gulp.task('a_copy:libs', function () {
    gulp.src(npmDist(), { base: './node_modules/' })
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
        }))
        .pipe(gulp.dest('./wwwroot/libs'));
});

var concat = require('gulp-concat');

gulp.task('b_bundle', function () {
    gulp.src(['./wwwroot/js/*.js'])
        .pipe(concat('site.js'))
        .pipe(gulp.dest('./wwwroot/js/bundle'))
});

const minify = require('gulp-minify');

gulp.task('c_compress', function () {
    gulp.src(['./wwwroot/js/bundle/*.js'])         
        .pipe(minify({
            ext: {
                src: '.org.js',
                min: '.min.js'
            },            
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulp.dest('./wwwroot/js/min'))  
});




