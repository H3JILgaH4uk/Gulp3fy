/**
 * @param {boolean} scrollFix       - Turn on/off Scroll Fix
 * @param {string}  fixedBlockClass - Modifier class for fixed blocks
 */

class ScrollLock {
	constructor(options) {
		const defaultOptions = {
			scrollFix: true,
			fixedBlockClass: 'fixed',
		};

		this.options = { ...defaultOptions, ...options };
		this.fixedBlocks = document?.querySelectorAll(`.${this.options.fixedBlockClass}`);
	}

	lock() {
		const scrollWidth = `${window.innerWidth - document.body.offsetWidth}px`;

		document.body.style.overflow = 'hidden';

		if (this.options.scrollFix) {
			document.body.style.paddingRight = scrollWidth;
		}

		if (this.options.scrollFix && this.fixedBlocks.length) {
			this.fixedBlocks.forEach(element => {
				element.style.paddingRight = scrollWidth;
			});
		}
	}

	unlock() {
		document.body.style.overflow = null;

		if (this.options.scrollFix) {
			document.body.style.paddingRight = null;
		}

		if (this.options.scrollFix && this.fixedBlocks.length) {
			this.fixedBlocks.forEach(element => {
				element.style.paddingRight = null;
			});
		}
	}
}

export default ScrollLock;
