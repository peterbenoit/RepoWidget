function initializeWidget() {
    const username = document.getElementById('username').value;
    const containerId = document.getElementById('containerId').value;
    const columns = {
        mobile: parseInt(document.getElementById('columnsMobile').value),
        tablet: parseInt(document.getElementById('columnsTablet').value),
        desktop: parseInt(document.getElementById('columnsDesktop').value),
    };
    const scaleOnHover = parseFloat(document.getElementById('scaleOnHover').value);
    const sortBy = document.getElementById('sortBy').value;
    const maxRepos = parseInt(document.getElementById('maxRepos').value); // New maxRepos setting
    const titleColor = document.getElementById('titleColor').value;
    const descriptionColor = document.getElementById('descriptionColor').value;
    const iconColor = document.getElementById('iconColor').value;
    const backgroundColor = document.getElementById('backgroundColor').value;

    createRepoWidget({
        username,
        containerId,
        columns,
        cardStyles: { backgroundColor },
        textStyles: { titleColor, descriptionColor, iconColor },
        scaleOnHover,
        sortBy,
        maxRepos,
    });

    updateConfigDisplay();
}

function updateConfigDisplay() {
    const config = {
        username: document.getElementById('username').value,
        containerId: document.getElementById('containerId').value,
        columns: {
            mobile: parseInt(document.getElementById('columnsMobile').value),
            tablet: parseInt(document.getElementById('columnsTablet').value),
            desktop: parseInt(document.getElementById('columnsDesktop').value),
        },
        cardStyles: {
            backgroundColor: document.getElementById('backgroundColor').value,
        },
        textStyles: {
            titleColor: document.getElementById('titleColor').value,
            descriptionColor: document.getElementById('descriptionColor').value,
            iconColor: document.getElementById('iconColor').value,
        },
        scaleOnHover: parseFloat(document.getElementById('scaleOnHover').value),
        sortBy: document.getElementById('sortBy').value,
        maxRepos: parseInt(document.getElementById('maxRepos').value),
    };
    document.getElementById('config-display').textContent = JSON.stringify(config, null, 2);
}

document.getElementById('apply-config').addEventListener('click', initializeWidget);

document.getElementById('copy-config').addEventListener('click', () => {
    const configText = document.getElementById('config-display').textContent;
    navigator.clipboard.writeText(configText).then(() => {
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.style.opacity = 1;
        setTimeout(() => (tooltip.style.opacity = 0), 1500);
    });
});

const colorControls = document.getElementById('color-controls');
const toggleControls = document.getElementById('toggle-controls');

toggleControls.addEventListener('click', () => {
    colorControls.classList.toggle('visible');
});

document.getElementById('close-controls').addEventListener('click', () => {
    colorControls.classList.remove('visible');
});

initializeWidget();
