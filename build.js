const fs = require('fs-extra');
const path = require('path');
const { minify } = require('terser');

async function build() {
	// Ensure directories exist
	fs.ensureDirSync(path.join(__dirname, 'dist'));
	fs.ensureDirSync(path.join(__dirname, 'docs/assets/js'));

	// Read source file
	const sourcePath = path.join(__dirname, 'src/lib/repoWidget.js');
	const sourceCode = fs.readFileSync(sourcePath, 'utf8');

	// Create regular distribution version
	fs.writeFileSync(path.join(__dirname, 'dist/repoWidget.js'), sourceCode);

	// Create minified version
	const minified = await minify(sourceCode, {
		compress: true,
		mangle: true,
		output: {
			comments: /^!/,
		},
	});
	fs.writeFileSync(path.join(__dirname, 'dist/repoWidget.min.js'), minified.code);

	// Create ES module version
	const esmCode = sourceCode
		.replace('(function ()', '// ESM version of RepoWidget\nexport function createRepoWidget')
		.replace('window.createRepoWidget = createRepoWidget;', '')
		.replace('})();', '');
	fs.writeFileSync(path.join(__dirname, 'dist/repoWidget.esm.js'), esmCode);

	// Copy to docs
	fs.copyFileSync(
		path.join(__dirname, 'dist/repoWidget.min.js'),
		path.join(__dirname, 'docs/assets/js/repoWidget.min.js')
	);
	fs.copyFileSync(
		path.join(__dirname, 'src/lib/repoWidget.js'),
		path.join(__dirname, 'docs/assets/js/repoWidget.js')
	);

	console.log('Build complete. Files written to dist/ and docs/assets/js/');
}

build().catch(err => {
	console.error('Build failed:', err);
	process.exit(1);
});
