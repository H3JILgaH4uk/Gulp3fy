'use-strict';

import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';
import * as checkDevice from './helpers/checkDevice';
// import * as themeSwitcher from './components/themeSwitcher';
import scrollBar from 'overlayscrollbars';
import scrollBarRc from './config/scrollbarsrc';
// import * as smoothScroll from './components/smoothScroll';
import * as swiperRc from './config/swiperrc';

documentReady(() => {
	lazyImages();
});
