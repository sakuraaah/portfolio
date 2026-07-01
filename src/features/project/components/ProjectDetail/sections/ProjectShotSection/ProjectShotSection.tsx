import { ImagePanel } from '@/shared/ui';

import { ProjectShotSectionRoot } from './ProjectShotSection.styled';

export function ProjectShotSection() {
  return (
    <ProjectShotSectionRoot>
      <ImagePanel
        animation="image"
        label="Lead project screenshot"
        variant="wide"
      />
    </ProjectShotSectionRoot>
  );
}
