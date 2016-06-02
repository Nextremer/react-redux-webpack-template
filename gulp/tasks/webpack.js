import gulp from 'gulp';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import webpack from 'gulp-webpack';
import config from '../config.js';

gulp.task('webpack', () => {
  gulp.src( config.webpack.entry )
      .pipe( webpack( config.webpack ) )
      .pipe( gulp.dest( config.js.dest ) );
});
