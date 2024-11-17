# 🎯 GitHub Repository Widget

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.ecma-international.org/ecma-262/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A lightweight, customizable widget to showcase your GitHub repositories on any website. Features responsive design, caching, and beautiful repository cards with rich metadata.

## ✨ Features

- 🎨 Fully customizable styling
- 📱 Responsive grid layout
- ⚡ Local caching for better performance
- 🌈 Language color coding
- 🔄 Multiple sorting options
- 💫 Hover animations
- 🎯 Configurable display limits

## 🚀 Quick Start

1. Include the script in your HTML:
```html
<script src="path/to/repoWidget.js"></script>
```

2. Add a container element:
```html
<div id="my-repos"></div>
```

3. Initialize the widget:
```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos'
});
```

## 🛠️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `username` | string | required | Your GitHub username |
| `containerId` | string | required | ID of the container element |
| `columns` | object | `{mobile: 1, tablet: 2, desktop: 3}` | Number of columns for different screen sizes |
| `cardStyles` | object | `{}` | Custom styles for repository cards |
| `textStyles` | object | `{}` | Custom styles for text elements |
| `scaleOnHover` | number/boolean | `1.05` | Scale factor on hover (0 or false to disable) |
| `maxRepos` | number | `columns.desktop * 2` | Maximum number of repositories to display |
| `sortBy` | string | `'stars'` | Sort criteria (`'stars'`, `'forks'`, `'size'`, `'name'`) |

## 💅 Styling Examples

### Custom Card Styles
```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos',
    cardStyles: {
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        boxShadow: '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff'
    }
});
```

### Custom Text Colors
```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos',
    textStyles: {
        titleColor: '#2d3748',
        descriptionColor: '#4a5568',
        iconColor: '#718096'
    }
});
```

## 🎨 Color Themes

The widget includes predefined colors for various programming languages:

- JavaScript: `#f1e05a`
- Python: `#3572A5`
- TypeScript: `#2b7489`
- React: `#61DAFB`
- And many more!

## 🔄 Caching

The widget automatically caches repository data for 24 hours to minimize API requests and improve performance.

## 📱 Responsive Design

The widget automatically adjusts its layout based on screen size:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

You can customize these values using the `columns` option.

## 🔀 Sorting Options

The widget provides flexible repository sorting capabilities through the `sortBy` parameter:

- `stars` (default): Display most starred repositories first
- `forks`: Sort by number of repository forks
- `size`: Order by repository size
- `name`: Alphabetical sorting by repository name

Example usage:
```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos',
    sortBy: 'forks',  // Show most forked repositories first
    maxRepos: 6       // Limit to top 6 most forked repos
});
```

This sorting is performed client-side and works seamlessly with the caching system, ensuring quick response times while maintaining flexibility.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub API for providing repository data
- The open-source community for inspiration

---

Made with ❤️ by [Pete](https://www.peterbenoit.com)
