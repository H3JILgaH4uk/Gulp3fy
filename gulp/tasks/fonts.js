import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import del from 'del';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from '../config/path.js';

const fontsConvertOTF = () => {
	return gulp
		.src(path.fonts.src.otf)
		.pipe(
			plumber(
				notify.onError({
					title: '[FONTS] convertOTF',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(gulp.dest(path.fonts.root));
};

const fontsConvertTTF = () => {
	return gulp
		.src(path.fonts.src.ttf)
		.pipe(
			plumber(
				notify.onError({
					title: '[FONTS] convertTTF',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.fonts.root));
};

const fontsDel = () => del([`${path.fonts.root}*.*`, `!${path.fonts.src.woff2}`]);
const fontsBuild = () => gulp.src(path.fonts.src.woff2).pipe(gulp.dest(path.fonts.dest));

export default gulp.series(fontsConvertTTF, fontsDel, fontsBuild);
export { fontsConvertOTF };
