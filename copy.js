const fs = require('fs');
const path = require('path');

// copies the working js to the npm package for deployment
const sourceFilePath = path.join(__dirname, 'src/lib/repoWidget.js');
const destinationFilePath = path.join(__dirname, 'packages/repo-widget/src/index.js');

// Read the source file
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source file:', err);
        return;
    }

    // Remove the first line and the last two lines (IIFE wrapper)
    const lines = data.split('\n');
    const modifiedLines = lines.slice(1, -2);

    // Remove the line containing 'window.createRepoWidget = createRepoWidget;'
    const filteredLines = modifiedLines.filter(
        (line) => !line.includes('window.createRepoWidget = createRepoWidget;')
    );

    // Add the export statement at the end
    filteredLines.push('export { createRepoWidget };');

    // Write the modified content to the destination file
    fs.writeFile(destinationFilePath, filteredLines.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to destination file:', err);
            return;
        }
        console.log('Build script executed successfully.');
    });
});
