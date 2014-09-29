var gulp = require('gulp')
   ,watch = require('gulp-watch')
   ,sass = require('gulp-sass')
   ,compass = require('gulp-compass')
   ,coffee = require('gulp-coffee')
   ,cssmin = require('gulp-cssmin')
   ,uglify = require('gulp-uglify');

gulp.task('sass', function(){
  gulp.src('./sass/*.sass')
  .pipe(sass({sourceComments: 'normal'}))
  .pipe(cssmin())
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('coffee', function(){
  gulp.src('./coffee/*.coffee')
  .pipe(coffee())
  .pipe(uglify())
  .pipe(gulp.dest('./assets/js'));
});

/* compass TODO
gulp.task('compass', function(){
  gulp.src('./scss/*.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: 'css',
    sass: 'sass'
  }))
  .pipe(gulp.dest('./assets/css'));
});
*/

gulp.task('watch', function(){
  gulp.watch('./sass/*.sass', function(){
    gulp.run('sass');
  });
  
  gulp.watch('./coffee/*.coffee', function(){
    gulp.run('coffee');
  });
  /* compass TODO
  gulp.watch('./scss/*.scss', function(){
    gulp.run('compass');
  });
  */
});

gulp.task('default', ['watch']);

