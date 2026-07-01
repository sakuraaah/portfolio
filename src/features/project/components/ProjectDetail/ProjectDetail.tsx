import { type Project } from '@/entities/project';

import { projects } from '@/shared/constants';

import {
  ProjectBodySection,
  ProjectHeroSection,
  ProjectMoreSection,
  ProjectShotSection,
} from './sections';

type ProjectDetailProps = {
  project?: Project;
};

export function ProjectDetail({ project = projects[0] }: ProjectDetailProps) {
  return (
    <main>
      <ProjectHeroSection project={project} />
      <ProjectShotSection />
      <ProjectBodySection project={project} />
      <ProjectMoreSection />
    </main>
  );
}
