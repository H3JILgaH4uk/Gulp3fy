import gulp from 'gulp';
import { clearDist, clearSrc, cleanFonts } from './gulp/tasks/clean.js';
import { markupBuild, markupWatch } from './gulp/tasks/markup.js';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles.js';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts.js';
import getFontsWoff2 from './gulp/tasks/fonts.js';
import { images, imagesWatch } from './gulp/tasks/images.js';
import { sprites, spritesWatch } from './gulp/tasks/sprites.js';
import { copyBuild, copyWatch, copyFonts } from './gulp/tasks/copy.js';
import zip from './gulp/tasks/zip.js';
import server from './gulp/tasks/server.js';
import config from './gulp/config.js';

const build = [];
const watch = [];
const fonts = gulp.series(getFontsWoff2, cleanFonts, copyFonts);

config.task.markup ? [build.push(markupBuild), watch.push(markupWatch)] : null;
config.task.styles ? [build.push(stylesBuild), watch.push(stylesWatch)] : null;
config.task.scripts ? [build.push(scriptsBuild), watch.push(scriptsWatch)] : null;
config.task.fonts ? build.push(fonts) : null;
config.task.images ? [build.push(images), watch.push(imagesWatch)] : null;
config.task.sprites ? [build.push(sprites), watch.push(spritesWatch)] : null;
config.task.copy ? [build.push(copyBuild), watch.push(copyWatch)] : null;

const dev = gulp.series(clearDist, build, gulp.parallel(watch, server));
const prod = gulp.series(clearDist, build);
const archiving = gulp.series(clearDist, build, zip);

export { dev };
export { prod };
export { archiving };
export { getFontsWoff2 };
export { clearSrc };
