/* eslint-disable import/prefer-default-export */
import * as nodePath from 'path';
import { ftpConfig } from '../../config.js';

const root = nodePath.basename(nodePath.resolve());
const compiled = `./dist`;
const source = `./src`;

export const path = {
	source,
	compiled,
	root,

	isProd: process.argv.includes('--prod'),
	isDev: !process.argv.includes('--prod'),

	markup: {
		src: `${source}/markup/*.pug`,
		dest: compiled,
		watch: `${source}/markup/**/*.pug`,
	},

	styles: {
		src: `${source}/styles/main.scss`,
		dest: `${compiled}/assets/css`,
		watch: `${source}/styles/**/*.scss`,
	},

	scripts: {
		src: `${source}/scripts/app.js`,
		dest: `${compiled}/assets/js`,
		watch: `${source}/scripts/**/*.js`,
	},

	fonts: {
		src: {
			otf: `${source}/assets/fonts/**/*.otf`,
			ttf: `${source}/assets/fonts/**/*.ttf`,
			folder: `${source}/assets/fonts/`,
		},
		dest: `${compiled}/assets/fonts`,
		watch: `${source}/assets/fonts/**/*.ttf`,
		config: `${source}/styles/config/fonts.scss`,
	},

	images: {
		src: `${source}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
		dest: `${compiled}/assets/images`,
		watch: `${source}/assets/images/**/*.{jpg,png,svg,gif,ico,webp}`,
		placehoder: `${source}/assets/images/**/placeholder.png`,
		svg: `${source}/assets/images/**/*.svg`,
	},

	icons: {
		src: {
			mono: `${source}/assets/icons/mono/*.svg`,
			multi: `${source}/assets/icons/multi/*.svg`,
		},
		dest: `${compiled}/assets/images`,
		watch: {
			mono: `${source}/assets/icons/mono/*.svg`,
			multi: `${source}/assets/icons/multi/*.svg`,
		},
	},

	favicon: {
		src: `${source}/assets/favicon/favicon.{jpg,png,svg,gif,ico,webp}`,
		dest: `${compiled}/assets/images/common/`,
		watch: `${source}/assets/favicon/favicon.{jpg,png,svg,gif,ico,webp}`,
	},

	components: {
		markup: `${source}/components/**/*.pug`,
		styles: `${source}/components/**/*.scss`,
		scripts: `${source}/components/**/*.js`,
	},

	files: {
		src: `${source}/assets/files/**/*.*`,
		dest: `${compiled}/assets/files/`,
		watch: `${source}/assets/files/**/*.*`,
	},

	zip: {
		compiled: `${compiled}/**/*.*`,
		del: `./${root}.zip`,
		root: `./${root}.zip`,
	},

	ftp: {
		server: ftpConfig.folder,
		local: `${compiled}/**/*.*`,
	},
};
