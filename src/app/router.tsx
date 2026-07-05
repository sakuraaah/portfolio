import { Suspense, type ReactNode } from 'react';

import type { RouteObject } from 'react-router-dom';

import { LazyHomePage, LazyProjectPage } from '@/pages/lazy';

import { profile, projects } from '@/shared/constants';
import { SiteShell } from '@/shared/layout';

function withPageSuspense(element: ReactNode) {
  return <Suspense fallback={null}>{element}</Suspense>;
}

export const appRoutes = [
  {
    element: <SiteShell profileName={profile.name} />,
    children: [
      {
        index: true,
        element: withPageSuspense(<LazyHomePage />),
      },
      ...projects.map((project) => ({
        path: project.id,
        element: withPageSuspense(<LazyProjectPage project={project} />),
      })),
    ],
  },
] satisfies RouteObject[];
