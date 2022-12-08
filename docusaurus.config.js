const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Project Nexus",
  tagline: 'Yet Another Custom Kernels For Android Devices',
  url: 'https://Project-Nexus.github.io', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'Projects-Nexus', // Usually your GitHub org/user name.
  projectName: 'Project Nexus', 
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: "Project Nexus",
      // logo: {
      //   alt: 'logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'discover/overview',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'doc',
          docId: 'discover/devices',
          position: 'left',
          label: 'Supported devices',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram - Update channel',
              href: 'https://t.me/NexusKernel',
            },
            {
              label: 'Telegram - Discussion group',
              href: 'https://t.me/NexusKernelOfficial',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sourceforge',
              href: 'https://sourceforge.net/projects/nexuskernel/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/orgs/projects-nexus/dashboard',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Nexus j. Built with Docusaurus`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/projects-nexus/project-nexus/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
