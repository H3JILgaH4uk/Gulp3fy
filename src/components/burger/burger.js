/* eslint-disable prefer-const */
//* ### Functions ###
//* ################################

// Initialization burger dropdowns
const initBurgerDropdowns = (init) => {
	init.forEach((block) => {
		initBurgerDropdownBody(block);
		block.addEventListener('click', setBurgerDropdownAction);
	});
};

// Working with burger dropdown body
const initBurgerDropdownBody = (block, hidden = true) => {
	const buttons = block.querySelectorAll('[data-dropdown-btn]');

	if (buttons.length > 0) {
		buttons.forEach((btns) => {
			const btn = btns;

			if (hidden) {
				btn.removeAttribute('tabindex');

				if (!btn.classList.contains('--show')) {
					btn.nextElementSibling.hidden = true;
				}
			} else {
				btn.setAttribute('tabindex', '-1');
				btn.nextElementSibling.hidden = false;
			}
		});
	}
};

// Sets action accordion for burger dropdowns
const setBurgerDropdownAction = (e) => {
	const el = e.target;

	if (el.hasAttribute('data-dropdown-btn') || el.closest('[data-dropdown-btn]')) {
		// prettier-ignore
		const button = el.hasAttribute('data-dropdown-btn') ? el : el.closest('[data-dropdown-btn]');
		const block = button.closest('[data-burger-accordion]');

		if (!block.querySelectorAll('.--slide').length) {
			if (!button.classList.contains('--show')) {
				hideBurgerDropdownsBody(block);
			}

			button.classList.toggle('--show');
			slideToggle(button.nextElementSibling, 500);
		}

		e.preventDefault();
	}
};

// Hide inactive burger dropdowns
const hideBurgerDropdownsBody = (block) => {
	const activeButton = block.querySelector('[data-dropdown-btn].--show');

	if (activeButton) {
		activeButton.classList.remove('--show');
		slideUp(activeButton.nextElementSibling, 500);
	}
};

// //* ### Animations ###
let slideUp = (target, duration = 500) => {
	const t = target;
	if (!target.classList.contains('--slide')) {
		t.classList.add('--slide');
		t.style.transitionProperty = 'height, margin, padding';
		t.style.transitionDuration = `${duration}ms`;
		t.style.height = `${t.offsetHeight}px`;
		t.offsetHeight;
		t.style.overflow = 'hidden';
		t.style.height = 0;
		t.style.paddingTop = 0;
		t.style.paddingBottom = 0;
		t.style.marginTop = 0;
		t.style.marginBottom = 0;
		window.setTimeout(() => {
			t.hidden = true;
			t.style.removeProperty('height');
			t.style.removeProperty('padding-top');
			t.style.removeProperty('padding-bottom');
			t.style.removeProperty('margin-top');
			t.style.removeProperty('margin-bottom');
			t.style.removeProperty('overflow');
			t.style.removeProperty('transition-duration');
			t.style.removeProperty('transition-property');
			t.classList.remove('--slide');
		}, duration);
	}
};

const slideDown = (target, duration = 500) => {
	const t = target;
	if (!target.classList.contains('--slide')) {
		target.classList.add('--slide');

		if (target.hidden) {
			t.hidden = false;
		}

		const height = target.offsetHeight;

		t.style.overflow = 'hidden';
		t.style.height = 0;
		t.style.paddingTop = 0;
		t.style.paddingBottom = 0;
		t.style.marginTop = 0;
		t.style.marginBottom = 0;
		t.offsetHeight;
		t.style.transitionProperty = 'height, margin, padding';
		t.style.transitionDuration = `${duration}ms`;
		t.style.height = `${height}px`;
		t.style.removeProperty('padding-top');
		t.style.removeProperty('padding-bottom');
		t.style.removeProperty('margin-top');
		t.style.removeProperty('margin-bottom');

		window.setTimeout(() => {
			t.style.removeProperty('height');
			t.style.removeProperty('overflow');
			t.style.removeProperty('transition-duration');
			t.style.removeProperty('transition-property');
			t.classList.remove('--slide');
		}, duration);
	}
};

let slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return slideDown(target, duration);
	}
	return slideUp(target, duration);
};
//* ################################

// Get all burger dropdowns, includes attribute [data-burger-accordion]
const burgerDropdownsArray = document.querySelectorAll('[data-burger-accordion]');

// Init burger menu
const menuIcon = document.querySelector('.burger__icon');

if (menuIcon) {
	const burgerBody = document.querySelector('.burger__body');
	const burgerDropdownsArrayLocal = document.querySelectorAll('.menu__title');
	const burgerDropdownsArrayLocalContent = document.querySelectorAll('.menu__sub-list');
	const overlay = document.querySelector('.overlay');

	menuIcon.addEventListener('click', (e) => {
		document.body.classList.toggle('--lock');
		menuIcon.classList.toggle('--show');
		burgerBody.classList.toggle('--show');
		overlay.classList.toggle('--show');

		if (!menuIcon.classList.contains('--show')) {
			burgerDropdownsArrayLocal.forEach((item) => {
				item.classList.remove('--show');

				burgerDropdownsArrayLocalContent.forEach((bItem) => {
					slideUp(bItem, 500);
				});
			});
		}
	});
}

//* ### Body ###
//* ################################
if (burgerDropdownsArray.length > 0) {
	// Getting the default spoilers
	const burgerDropdowns = Array.from(burgerDropdownsArray).filter((item, index, self) => {
		return !item.dataset.burgerAccordion.split(',')[0];
	});

	// Initializing burger dropdowns
	if (burgerDropdowns.length > 0) {
		initBurgerDropdowns(burgerDropdowns);
	}
}
