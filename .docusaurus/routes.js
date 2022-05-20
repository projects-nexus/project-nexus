import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/project-nexus/markdown-page',
    component: ComponentCreator('/project-nexus/markdown-page', 'b7d'),
    exact: true
  },
  {
    path: '/project-nexus/docs',
    component: ComponentCreator('/project-nexus/docs', '99d'),
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
        path: '/project-nexus/docs/notes/lavender/latest',
        component: ComponentCreator('/project-nexus/docs/notes/lavender/latest', '619'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/lavender/v9.4',
        component: ComponentCreator('/project-nexus/docs/notes/lavender/v9.4', '96f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/miatoll/latest',
        component: ComponentCreator('/project-nexus/docs/notes/miatoll/latest', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/r5x/latest',
        component: ComponentCreator('/project-nexus/docs/notes/r5x/latest', '7c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-nexus/docs/notes/whyred/latest',
        component: ComponentCreator('/project-nexus/docs/notes/whyred/latest', '101'),
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
    component: ComponentCreator('/project-nexus/', '63a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
