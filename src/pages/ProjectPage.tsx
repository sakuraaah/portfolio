import {
  ProjectBodySection,
  ProjectHeroSection,
  ProjectMoreSection,
  ProjectShotSection,
} from '@/features/project';

import type { Project } from '@/entities/project';

type ProjectPageProps = {
  project: Project;
};

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <main>
      <ProjectHeroSection project={project} />
      <ProjectShotSection project={project} />
      <ProjectBodySection project={project} />
      <ProjectMoreSection />
    </main>
  );
}
