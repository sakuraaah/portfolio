import { Suspense } from 'react';

import type { RouteObject } from 'react-router-dom';

import { LazyHomePage, LazyProjectPage } from '@/pages/lazy';

import { profile, projects } from '@/shared/constants';
import { SiteShell } from '@/shared/layout';
import { HomeSkeleton, ProjectSkeleton } from '@/shared/ui';

export const appRoutes = [
  {
    element: <SiteShell profileName={profile.name} />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <LazyHomePage />
          </Suspense>
        ),
      },
      ...projects.map((project) => ({
        path: project.id,
        element: (
          <Suspense fallback={<ProjectSkeleton />}>
            <LazyProjectPage project={project} />
          </Suspense>
        ),
      })),
    ],
  },
] satisfies RouteObject[];
