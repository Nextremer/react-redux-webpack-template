import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'babel-core/register';

gulp.task('mocha', () => {
  gulp.src( './test/**/*.js', { read: false } )
      .pipe( mocha() );
});

