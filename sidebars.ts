import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: '📡 API Reference',
      collapsed: false,
      items: [
        'api-reference/authentication',
        'api-reference/anchors',
      ],
    },
    {
      type: 'category',
      label: '📦 SDK Guides',
      collapsed: false,
      items: [
        'sdk-guides/unity',
      ],
    },
    {
      type: 'category',
      label: '📖 Tutorials',
      collapsed: true,
      items: [
        'tutorials/first-ar-app',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: '❓ FAQ',
    },
  ],
};

export default sidebars;
