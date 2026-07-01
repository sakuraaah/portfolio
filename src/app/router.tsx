import type { RouteObject } from 'react-router-dom';

import { HomePage, ProjectPage } from '@/pages';

import { profile } from '@/shared/constants';
import { SiteShell } from '@/shared/layout';

export const appRoutes = [
  {
    element: <SiteShell profileName={profile.name} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
    ],
  },
] satisfies RouteObject[];
