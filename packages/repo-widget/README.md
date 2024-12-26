# GitHub Repository Widget

A lightweight, customizable widget to showcase GitHub repositories on any website. Features responsive design, caching, and beautiful repository cards with rich metadata.

---

## Installation

Install the package via npm:

```bash
npm install repowidget
```

---

## Usage

### **UMD (Browser)**

Include the widget in your webpage using the UMD bundle:

```html
<div id="my-repos"></div>
<script>
    import { createRepoWidget } from 'repowidget';
    RepoWidget.createRepoWidget({
        username: 'github-username',
        containerId: 'my-repos',
    });
</script>
```

### **ESM (Module)**

Use the widget as a module:

```html
<div id="my-repos"></div>
<script type="module">
    import { createRepoWidget } from 'repowidget';
    createRepoWidget({
        username: 'github-username',
        containerId: 'my-repos',
    });
</script>
```

---

## Configuration Options

| Option         | Type             | Default                              | Description                                              |
| -------------- | ---------------- | ------------------------------------ | -------------------------------------------------------- |
| `username`     | `string`         | **required**                         | Your GitHub username                                     |
| `containerId`  | `string`         | **required**                         | ID of the container element                              |
| `columns`      | `object`         | `{mobile: 1, tablet: 2, desktop: 3}` | Number of columns for different screen sizes             |
| `cardStyles`   | `object`         | `{}`                                 | Custom styles for repository cards                       |
| `textStyles`   | `object`         | `{}`                                 | Custom styles for text elements                          |
| `scaleOnHover` | `number/boolean` | `1.05`                               | Scale factor on hover (`0` or `false` to disable)        |
| `maxRepos`     | `number`         | `columns.desktop * 2`                | Maximum number of repositories to display                |
| `sortBy`       | `string`         | `'stars'`                            | Sort criteria (`'stars'`, `'forks'`, `'size'`, `'name'`) |

---

## Styling Examples

### **Custom Card Styles**

```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos',
    cardStyles: {
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        boxShadow: '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff',
    },
});
```

### **Custom Text Colors**

```javascript
createRepoWidget({
    username: 'github-username',
    containerId: 'my-repos',
    textStyles: {
        titleColor: '#2d3748',
        descriptionColor: '#4a5568',
        iconColor: '#718096',
    },
});
```

---

## Features

-   Responsive grid layout
-   Local caching for better performance
-   Language color coding
-   Multiple sorting options
-   Hover animations
-   Configurable display limits

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
