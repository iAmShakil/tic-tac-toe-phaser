const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifyjs = require('gulp-uglify')
const jshint = require('gulp-jshint')
const imagemin = require('gulp-imagemin')
const browsersync = require('browser-sync')
const beeper = require('beeper')
const plumber = require('gulp-plumber')
// const sourcemaps = require('gulp-sourcemaps')
// const babel = require('gulp-babel')

const onError = err => {
  beeper()
  console.log(err)
}

// JS libs task
const libs = ['src/libs/phaser.js']
gulp.task('libs', () => {
  return gulp
    .src(libs)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(concat('libs.js'))
    .pipe(uglifyjs())
    .pipe(gulp.dest('build/libs'))
})

// Scripts task
const states = [
  'src/js/boot.js',
  'src/js/load.js',
  'src/js/menu.js',
  'src/js/play.js',
  'src/js/win.js',
  'src/js/lose.js',
  'src/js/draw.js',
  'src/js/game.js'
]
gulp.task('scripts', () => {
  return gulp
    .src(states)
    .pipe(plumber({ errorHandler: onError }))
    // .pipe(sourcemaps.init())
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    // .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('states.js'))
    .pipe(uglifyjs())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
})

// Images task
gulp.task('images', () => {
  return gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
})

// Browser Sync task
gulp.task('browsersync', cb => {
  return browsersync({
    server: {
      baseDir: './build'
    }
  }, cb)
})

// Watch task
gulp.task('watch', () => {
  gulp.watch('src/libs/*.js', ['libs', browsersync.reload])
  gulp.watch('src/js/*.js', ['scripts', browsersync.reload])
  gulp.watch('src/img/*', ['images', browsersync.reload])
})

// Default task
gulp.task('default', ['libs', 'scripts', 'images', 'browsersync', 'watch'])
