/**
 * Mobile Navigation Handler for RepoWidget
 */
document.addEventListener('DOMContentLoaded', function () {
	const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
	const navLinks = document.querySelector('.nav-links');
	const overlay = document.querySelector('.overlay');
	const navLinkItems = document.querySelectorAll('.nav-link a');

	if (!mobileNavToggle || !navLinks || !overlay) {
		return; // Safety check in case elements don't exist
	}

	// Function to toggle the mobile menu
	function toggleMobileNav() {
		navLinks.classList.toggle('active');
		overlay.classList.toggle('active');

		// Toggle between menu and close icons
		const icon = mobileNavToggle.querySelector('i');
		if (icon) {
			if (icon.classList.contains('fa-bars')) {
				icon.classList.remove('fa-bars');
				icon.classList.add('fa-times');
			} else {
				icon.classList.remove('fa-times');
				icon.classList.add('fa-bars');
			}
		}
	}

	// Toggle menu when hamburger icon is clicked
	mobileNavToggle.addEventListener('click', toggleMobileNav);

	// Close menu when overlay is clicked
	overlay.addEventListener('click', toggleMobileNav);

	// Close menu when a nav link is clicked
	navLinkItems.forEach(link => {
		link.addEventListener('click', function () {
			if (navLinks.classList.contains('active')) {
				toggleMobileNav();
			}
		});
	});

	// Adjust for viewport changes
	window.addEventListener('resize', function () {
		if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
			navLinks.classList.remove('active');
			overlay.classList.remove('active');
			const icon = mobileNavToggle.querySelector('i');
			if (icon) {
				icon.classList.remove('fa-times');
				icon.classList.add('fa-bars');
			}
		}
	});
});
