import { type ReactNode, Suspense } from 'react';

import type { RouteObject } from 'react-router-dom';

import { LazyHomePage, LazyProjectPage } from '@/pages/lazy';

import { profile, projects } from '@/shared/constants';
import { SiteShell } from '@/shared/layout';
import { PageSkeleton } from '@/shared/ui';

function withPageSuspense(element: ReactNode) {
  return <Suspense fallback={<PageSkeleton />}>{element}</Suspense>;
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
