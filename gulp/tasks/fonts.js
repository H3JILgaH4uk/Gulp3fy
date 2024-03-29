import gulp from 'gulp';
import plumber from 'gulp-plumber';
import ttf2woff2 from 'gulp-ttf2woff2';
import paths from '../paths.js';

const convertTTFtoWOFF2 = () =>
	gulp
		.src(paths.fonts.ttf)
		.pipe(
			plumber({
				errorHandler(error) {
					console.error(error.message);
					this.emit('end');
				},
			})
		)
		.pipe(ttf2woff2())
		.pipe(gulp.dest(paths.fonts.input));

export default convertTTFtoWOFF2;
