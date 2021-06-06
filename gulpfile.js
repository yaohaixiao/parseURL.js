const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const umd = require('gulp-umd')
const uglify = require('gulp-uglify')

const copy = () => {
  return gulp.src('./src/es6/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
  .pipe(gulp.dest('dist/es6'))
}

const transpile = () => {
  return gulp.src('./src/parseURL.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
  .pipe(babel())
  .pipe(umd({
    exports: function () {
      return 'parseURL'
    },
    namespace: function () {
      return 'parseURL'
    }
  }))
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('docs/js'))
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dist'))
}

exports.transpile = gulp.series(copy, transpile)
