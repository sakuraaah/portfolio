import type { RouteObject } from 'react-router-dom';

import { HomePage, ProjectPage } from '@/pages';

import { profile, projects } from '@/shared/constants';
import { SiteShell } from '@/shared/layout';

export const appRoutes = [
  {
    element: <SiteShell profileName={profile.name} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...projects.map((project) => ({
        path: project.id,
        element: <ProjectPage project={project} />,
      })),
    ],
  },
] satisfies RouteObject[];
