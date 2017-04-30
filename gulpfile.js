var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber');
    imageMin = require('gulp-imagemin')


gulp.task('start', () => {
  nodemon({
    script: 'server.js'
  })
})


gulp.task('sass', () => {
   gulp.src('app/static/style/*.sass')
   .pipe(plumber())
   .pipe(sass({
     errLogToConsole: true,
     optimizationLevel: 5
   }))
   .pipe(gulp.dest('dist/static/style'))
   .pipe(browserSync.stream())
})


gulp.task('views', () => {
  gulp.src('./app/views/**/*.ejs')
  .pipe(gulp.dest('./dist/views'))
})

gulp.task('imagemin', () => {
  gulp.src('./app/static/images/*')
  .pipe(imageMin({
    progressive: true
  }))
  .pipe(gulp.dest('./dist/static/images'))
})


gulp.task('serve', ['sass', 'views', 'imagemin', 'start'], () => {
    setTimeout(() => {
      browserSync.init({
        proxy: 'localhost:8080',
        files: ['app/**/*.*', '!app/**/*.sass']
        })
    }, 1000)
})


gulp.watch('app/**/*.sass', ['sass']);
