import gulp from 'gulp';
import { deleteAsync as del } from 'del';
import plumber from 'gulp-plumber';
import gzip from 'gulp-zip';
import paths from '../paths.js';

const zip = () => {
	del(paths.zip.del);

	return gulp
		.src(paths.zip.compiled, {})
		.pipe(
			plumber({
				errorHandler(error) {
					console.error(error.message);
				},
			})
		)
		.pipe(gzip(paths.zip.root))
		.pipe(gulp.dest('./'));
};

export default zip;
