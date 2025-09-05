document.addEventListener('DOMContentLoaded', function () {
	var hamburger = document.querySelector('nav .hamburger');
	var menu = document.getElementById('primary-menu');
	if (!hamburger || !menu) return;

	hamburger.addEventListener('click', function () {
		var open = document.body.classList.toggle('nav-open');
		this.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	// Close menu when clicking outside
	document.addEventListener('click', function (e) {
		if (!document.body.classList.contains('nav-open')) return;
		if (e.target === hamburger || hamburger.contains(e.target)) return;
		if (menu.contains(e.target)) return;
		document.body.classList.remove('nav-open');
		hamburger.setAttribute('aria-expanded', 'false');
	});
});
