import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  gulp.src('./src/**/*.js')
      .pipe( plumber({
        errorHandler: ( e ) => {
          var taskName = 'eslint';
          var title = '[task]' + taskName + ' ' + e.plugin;
          var errorMsg = 'error: ' + e.message;
          // ターミナルにエラーを出力
          console.error(title + '\n' + errorMsg);
        }
      }))
      .pipe( eslint() )
      .pipe( eslint.format() )
      .pipe( eslint.failOnError() )
      .pipe( plumber.stop() );
});
