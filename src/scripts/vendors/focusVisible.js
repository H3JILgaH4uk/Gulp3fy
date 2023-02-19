const supportsNativeFocusVisible = () => {
	try {
		document.querySelector(':focus-visible');
		return true;
	} catch (e) {
		return false;
	}
};

(async () => {
	if (!supportsNativeFocusVisible()) await import('focus-visible');
})();
