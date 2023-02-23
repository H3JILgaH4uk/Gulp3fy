//? ### Utils
import documentReady from './utils/documentReady.js';
import lazyLoad from './vendors/vanilla-lazyload.js';
// import checkDevice from './utils/checkDevice.js';

//? ### Vendors
import './vendors/focus-visible.js';
// import './vendors/swiper.js';
// import 'simplebar';
// import './vendors/dialog-polyfill.js';

//? ### Core
import './core/components.js';

//? ### Pages
import './pages/index.js';

documentReady(() => {
	lazyLoad();
	// checkDevice({ bodyClass: true });
});
