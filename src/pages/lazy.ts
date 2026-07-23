import { lazy } from 'react';

export const LazyHomePage = lazy(() =>
  import('./HomePage').then((module) => ({ default: module.HomePage }))
);

export const LazyProjectPage = lazy(() =>
  import('./ProjectPage').then((module) => ({
    default: module.ProjectPage,
  }))
);

export const LazyNotFoundPage = lazy(() =>
  import('./NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }))
);
