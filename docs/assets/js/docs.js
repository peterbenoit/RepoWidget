/**
 * RepoWidget Documentation Site JavaScript
 */
document.addEventListener('DOMContentLoaded', function () {
	// Initialize the demo widget
	initializeDemo();

	// Tab switching functionality
	setupTabNavigation();

	// Range input value display
	const scaleInput = document.getElementById('scaleOnHover');
	const scaleValue = document.getElementById('scaleValue');

	if (scaleInput && scaleValue) {
		scaleInput.addEventListener('input', function () {
			scaleValue.textContent = this.value;
		});
	}

	// Copy configuration button
	const copyConfigBtn = document.getElementById('copyConfig');
	if (copyConfigBtn) {
		copyConfigBtn.addEventListener('click', function () {
			const configCode = document.getElementById('configCode');

			if (configCode) {
				const textArea = document.createElement('textarea');
				textArea.value = configCode.textContent;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);

				// Visual feedback
				copyConfigBtn.textContent = 'Copied!';
				setTimeout(function () {
					copyConfigBtn.textContent = 'Copy Configuration';
				}, 2000);
			}
		});
	}

	// Apply settings button for the demo
	const applySettingsBtn = document.getElementById('applySettings');
	if (applySettingsBtn) {
		applySettingsBtn.addEventListener('click', function () {
			initializeDemo();
			updateConfigDisplay();
		});
	}
});

/**
 * Set up tab navigation in documentation
 */
function setupTabNavigation() {
	const tabs = document.querySelectorAll('.tab');
	if (!tabs.length) return;

	tabs.forEach(tab => {
		tab.addEventListener('click', function () {
			const tabId = this.getAttribute('data-tab');

			// Deactivate all tabs and content
			document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
			document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

			// Activate clicked tab and its content
			this.classList.add('active');
			document.getElementById(`${tabId}-content`).classList.add('active');
		});
	});
}

/**
 * Initialize the demo widget with current form settings
 */
function initializeDemo() {
	const username = document.getElementById('username').value;
	const maxRepos = parseInt(document.getElementById('maxRepos').value);
	const sortBy = document.getElementById('sortBy').value;

	const columns = {
		mobile: parseInt(document.getElementById('columnsMobile').value),
		tablet: parseInt(document.getElementById('columnsTablet').value),
		desktop: parseInt(document.getElementById('columnsDesktop').value)
	};

	const scaleOnHover = parseFloat(document.getElementById('scaleOnHover').value);
	const backgroundColor = document.getElementById('backgroundColor').value;
	const titleColor = document.getElementById('titleColor').value;
	const descriptionColor = document.getElementById('descriptionColor').value;
	const iconColor = document.getElementById('iconColor').value;

	createRepoWidget({
		username,
		containerId: "repo-container",
		columns,
		maxRepos,
		sortBy,
		scaleOnHover,
		cardStyles: { backgroundColor },
		textStyles: {
			titleColor,
			descriptionColor,
			iconColor
		}
	});
}

/**
 * Update the configuration code display based on current settings
 */
function updateConfigDisplay() {
	const username = document.getElementById('username').value;
	const maxRepos = parseInt(document.getElementById('maxRepos').value);
	const sortBy = document.getElementById('sortBy').value;

	const columns = {
		mobile: parseInt(document.getElementById('columnsMobile').value),
		tablet: parseInt(document.getElementById('columnsTablet').value),
		desktop: parseInt(document.getElementById('columnsDesktop').value)
	};

	const scaleOnHover = parseFloat(document.getElementById('scaleOnHover').value);
	const backgroundColor = document.getElementById('backgroundColor').value;
	const titleColor = document.getElementById('titleColor').value;
	const descriptionColor = document.getElementById('descriptionColor').value;
	const iconColor = document.getElementById('iconColor').value;

	const config = {
		username,
		containerId: "repo-container",
		columns,
		maxRepos,
		sortBy,
		scaleOnHover,
		cardStyles: { backgroundColor },
		textStyles: { titleColor, descriptionColor, iconColor }
	};

	const configCodeElement = document.getElementById('configCode');
	if (configCodeElement) {
		configCodeElement.textContent = `createRepoWidget(${JSON.stringify(config, null, 4)});`;
	}
}

// Initialize demo on page load
if (typeof createRepoWidget !== 'undefined') {
	initializeDemo();
	updateConfigDisplay();
}
