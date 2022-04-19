import Lock from '../../../scripts/modules/lock.js';

const burger = () => {
	const backdrop = document.querySelector('.header__inner');
	const menu = document.querySelector('.header__nav');
	const target = document.querySelector('.burger');
	const lock = new Lock({});

	if (target) {
		target.addEventListener('click', () => {
			backdrop.classList.toggle('--show');
			menu.classList.toggle('--show');
			target.classList.toggle('--show');
			target.classList.contains('--show') ? lock.lock() : null;
			!target.classList.contains('--show') ? lock.unlock() : null;
		});
	}
};

export default burger;
