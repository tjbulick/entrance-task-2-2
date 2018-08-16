let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('server', () => {
	browserSync.init({
		server: {
			baseDir: "./src/"
		}
	});
	gulp.watch('./src/*.html').on('change', browserSync.reload);
	gulp.watch('./src/js/*.js').on('change', browserSync.reload);
	gulp.watch('./src/css/*.css', file => {
		gulp.src(file.path)
		.pipe(browserSync.stream());
	});
});

gulp.task('default', ['server']);