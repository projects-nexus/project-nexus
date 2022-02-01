
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/project-nexus/__docusaurus/debug',
    component: ComponentCreator('/project-nexus/__docusaurus/debug','4e7'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/config',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/config','2bd'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/content',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/content','3a3'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/globalData',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/globalData','f22'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/metadata',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/metadata','557'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/registry',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/registry','f28'),
    exact: true
  },
  {
    path: '/project-nexus/__docusaurus/debug/routes',
    component: ComponentCreator('/project-nexus/__docusaurus/debug/routes','a8b'),
    exact: true
  },
  {
    path: '/project-nexus/blog/archive',
    component: ComponentCreator('/project-nexus/blog/archive','1fd'),
    exact: true
  },
  {
    path: '/project-nexus/markdown-page',
    component: ComponentCreator('/project-nexus/markdown-page','2a0'),
    exact: true
  },
  {
    path: '/project-nexus/docs',
    component: ComponentCreator('/project-nexus/docs','670'),
    routes: [
      {
        path: '/project-nexus/docs/discover/devices',
        component: ComponentCreator('/project-nexus/docs/discover/devices','63e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/discover/install',
        component: ComponentCreator('/project-nexus/docs/discover/install','38f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/discover/overview',
        component: ComponentCreator('/project-nexus/docs/discover/overview','e4d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/lavender/latest',
        component: ComponentCreator('/project-nexus/docs/notes/lavender/latest','619'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/lavender/v9.4',
        component: ComponentCreator('/project-nexus/docs/notes/lavender/v9.4','96f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/miatoll/latest',
        component: ComponentCreator('/project-nexus/docs/notes/miatoll/latest','ce5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/r5x/latest',
        component: ComponentCreator('/project-nexus/docs/notes/r5x/latest','7c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/whyred/latest',
        component: ComponentCreator('/project-nexus/docs/notes/whyred/latest','101'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/teams',
        component: ComponentCreator('/project-nexus/docs/teams','018'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/project-nexus/',
    component: ComponentCreator('/project-nexus/','78f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
