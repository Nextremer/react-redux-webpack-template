import 'babel-register';
import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { resource: true });

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['test', 'webpack']);
  gulp.watch('./src/js/**/*.css', ['test', 'webpack']);
  gulp.watch('./src/*.html', ['copy']);
  gulp.start(['connect'])
});

gulp.task('test', ['lint', 'mocha']);
gulp.task('build', ['copy', 'test', 'webpack']);
gulp.task('default', ['build', 'watch']);

