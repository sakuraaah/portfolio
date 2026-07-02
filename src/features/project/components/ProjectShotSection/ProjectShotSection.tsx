import { type Project } from '@/entities/project';

import { ImagePanel } from '@/shared/ui';

import { ProjectShotSectionRoot } from './ProjectShotSection.styled';

type ProjectShotSectionProps = {
  project: Project;
};

export function ProjectShotSection({ project }: ProjectShotSectionProps) {
  return (
    <ProjectShotSectionRoot>
      <ImagePanel animation="image" image={project.mainImage} variant="wide" />
    </ProjectShotSectionRoot>
  );
}
