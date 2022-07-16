import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/project-nexus/markdown-page',
    component: ComponentCreator('/project-nexus/markdown-page', '2b1'),
    exact: true
  },
  {
    path: '/project-nexus/docs',
    component: ComponentCreator('/project-nexus/docs', '902'),
    routes: [
      {
        path: '/project-nexus/docs/discover/devices',
        component: ComponentCreator('/project-nexus/docs/discover/devices', '63e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/discover/install',
        component: ComponentCreator('/project-nexus/docs/discover/install', '38f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/discover/overview',
        component: ComponentCreator('/project-nexus/docs/discover/overview', 'e4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/gauguin/latest',
        component: ComponentCreator('/project-nexus/docs/notes/gauguin/latest', '83c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/teams',
        component: ComponentCreator('/project-nexus/docs/teams', '018'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/project-nexus/',
    component: ComponentCreator('/project-nexus/', '3a7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
