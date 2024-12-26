const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/lib/repoWidget.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/images', to: 'images' },
                { from: './src/index.html', to: 'index.html' },
                {
                    from: './src/css/input.css',
                    to: 'output.css',
                    transform(content) {
                        const postcss = require('postcss');
                        const tailwind = require('tailwindcss');
                        const autoprefixer = require('autoprefixer');

                        return postcss([tailwind, autoprefixer])
                            .process(content)
                            .then((result) => result.css);
                    },
                },
            ],
        }),
    ],
};
