import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Spatial OS',
  tagline: 'The open-source spatial computing platform for AR/MR experiences',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production URL
  url: 'https://docs.spatial-os.org',
  baseUrl: '/',

  // GitHub Pages deployment config
  organizationName: 'spatial-os',
  projectName: 'spatial-os-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/spatial-os/spatial-os-docs/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/spatial-os-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'v1_announcement',
      content: '🚀 <b>Spatial OS v1.0</b> is now available! <a href="/getting-started/quick-start">Get started →</a>',
      backgroundColor: '#3b82f6',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Spatial OS',
      logo: {
        alt: 'Spatial OS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/api-reference/authentication',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/sdk-guides/unity',
          label: 'SDK Guides',
          position: 'left',
        },
        {
          href: 'https://github.com/spatial-os',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://ko-fi.com/nirmalbrj7',
          label: '❤️ Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/getting-started/introduction',
            },
            {
              label: 'Quick Start',
              to: '/getting-started/quick-start',
            },
            {
              label: 'API Reference',
              to: '/api-reference/authentication',
            },
          ],
        },
        {
          title: 'SDKs',
          items: [
            {
              label: 'Unity SDK',
              href: 'https://github.com/spatial-os/spatial-os-unity',
            },
            {
              label: 'React Native SDK',
              href: 'https://github.com/spatial-os/spatial-os-react-native',
            },
            {
              label: 'Web SDK',
              href: 'https://github.com/spatial-os/spatial-os-web',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/spatial-os/spatial-os-core/discussions',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/spatial-os/spatial-os-docs/blob/main/CONTRIBUTING.md',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/nirmalbrj7',
            },
            {
              label: 'GitHub Sponsors',
              href: 'https://github.com/sponsors/nirmalbrj7',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spatial OS. Apache-2.0 License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'bash', 'dart', 'swift', 'kotlin'],
    },
    algolia: {
      // TODO: Configure Algolia DocSearch (free for open source)
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'spatial-os',
      contextualSearch: true,
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
