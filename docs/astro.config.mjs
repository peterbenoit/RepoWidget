// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://www.repowidget.com',
	integrations: [
		starlight({
			title: 'RepoWidget',
			description: 'A lightweight, customizable JavaScript widget to showcase GitHub repositories on any website.',
			components: {
				Footer: './src/components/Footer.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/peterbenoit/RepoWidget' },
				{ icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/repo-widget' },
			],
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { name: 'author', content: 'Peter Benoit' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'RepoWidget' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
				{ tag: 'meta', attrs: { name: 'twitter:creator', content: '@peterbenoit' } },
				{ tag: 'meta', attrs: { name: 'color-scheme', content: 'light dark' } },
				// Google Analytics
				{ tag: 'script', attrs: { src: 'https://www.googletagmanager.com/gtag/js?id=G-GQEC09BG5Z', async: true } },
				{ tag: 'script', content: "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-GQEC09BG5Z');" },
			],
			editLink: {
				baseUrl: 'https://github.com/peterbenoit/RepoWidget/edit/main/docs/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Configuration Options', slug: 'api/configuration' },
						{ label: 'Full API Reference', slug: 'api/reference' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Code Examples', slug: 'examples/code-examples' },
						{ label: 'Live Demo', slug: 'examples/demo' },
					],
				},
				{
					label: 'Project',
					items: [
						{ label: 'Changelog', slug: 'project/changelog' },
						{ label: 'Contributing', slug: 'project/contributing' },
					],
				},
			],
		}),
	],
});
