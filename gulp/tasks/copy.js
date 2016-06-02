import gulp from 'gulp';
import rename from 'gulp-rename';

gulp.task('copy', ['copy_file']);

gulp.task('copy_file', () => {
  gulp.src('src/*.html')
      .pipe( gulp.dest('www') );
});

