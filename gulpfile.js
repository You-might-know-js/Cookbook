var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon');


gulp.task('start', () => {
  nodemon({
    script: 'server.js'
  })
})


gulp.task('sass', () => {
   gulp.src('app/static/style/*.sass')
   .pipe(sass())
   .pipe(gulp.dest('app/static/style'))
   .pipe(browserSync.stream())
})



gulp.task('serve', ['sass', 'start'], () => {
  browserSync.init({
    proxy: 'localhost:8080',
    files: ['app/**/*.*', '!app/**/*.sass']
})
})


gulp.watch('app/**/*.sass', ['sass']);
