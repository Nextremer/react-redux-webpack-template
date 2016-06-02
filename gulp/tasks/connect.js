import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('connect', () => {
  connect.server({
    root: './www/',
    port: 9080,
    livereload: true
  });
});
