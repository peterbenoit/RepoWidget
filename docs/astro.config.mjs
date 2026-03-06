// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://www.repowidget.com',
  integrations: [
    starlight({
      title: 'RepoWidget',
      description: 'A lightweight, customizable JavaScript widget to showcase GitHub repositories on any website.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/peterbenoit/RepoWidget' },
        { icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/repo-widget' },
      ],
      head: [
        { tag: 'meta', attrs: { name: 'author', content: 'Peter Benoit' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'RepoWidget' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
        { tag: 'meta', attrs: { name: 'twitter:creator', content: '@peterbenoit' } },
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'light dark' } },
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
