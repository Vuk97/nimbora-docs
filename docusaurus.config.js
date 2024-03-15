// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbora Docs',
  tagline: 'Yield Dexing on Starknet',
  favicon: 'img/Social media icon.png',

  // Set the production url of your site here
  url: 'https://docs.nimbora.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xSpaceShard', // Usually your GitHub org/user name.
  projectName: 'nimbora', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xSpaceShard/nimbora_yields_l2',
          exclude: process.env.EXCLUDE_FILES === 'true' ? [
            './concepts/strategies/02-strategy-sdai.md',
            './concepts/strategies/03-strategy-lStaking.md',
            './concepts/risks/02-risk-sdai.md',
            './concepts/risks/03-risk-lStaking.md'
          ] : []
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Social media icon.png',
      navbar: {
        title: 'Nimbora Docs',
        logo: {
          alt: 'Nimbora Logo',
          src: 'img/icon 2.svg',
          srcDark: 'img/icon 1.svg',

        },
        items: [
          {
            to: 'docs/concepts/overview',
            position: 'left',
            label: 'About Nimbora',
            className: 'V3_active'
          },
          {
            to: 'docs/contracts/architecture/overview',
            position: 'left',
            label: 'Contracts',
            className: 'V3_active'
          },
          {
            to: 'docs/sdks/sdk/overview',
            position: 'left',
            label: 'SDK',
            className: 'V3_active'
          },
          {
            href: 'https://github.com/0xSpaceShard/nimbora-yields-l2-public',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Devs',
            items: [
              {
                to: 'docs/contracts/architecture/overview',
                label: 'Smart Contracts',
              },
              {
                to: 'docs/sdks/sdk/overview',
                label: 'SDK',
              },
              {
                to: 'https://github.com/0xSpaceShard/nimbora-yields-l2-public',
                label: 'Github',
              },
              {
                to: 'http://discord.gg/nimbora',
                label: 'Ask questions',
              }
              
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'What is Nimbora',
                href: '/docs/concepts/overview',
              },
              {
                label: 'Nimbora Integrations',
                href: 'https://www.nimbora.io/integrations',
              },
              {
                label: 'Blogs',
                href: 'https://www.medium.com/@Nimbora',
              },
              {
                label: 'dAPP',
                href: 'https://app.nimbora.io/',
              },
              {
                label: 'Brand Assets',
                href: 'https://www.nimbora.io/toolkit',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Nimbora_',
              },
              {
                label: 'Discord',
                href: 'http://discord.gg/nimbora',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nimbora/',
              },
              {
                label: 'Starknet Forum',
                href: 'https://community.starknet.io/t/nimboras-defi-revolution-enhancing-accessibility-affordability-and-composability/104298'
              },
              {
                label: 'Zealy',
                href: 'https://zealy.io/c/nimbora'
              },
              {
                label: 'Galxe',
                href: 'https://galxe.com/Nimbora'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nimbora, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
