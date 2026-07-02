import { useTranslation } from 'react-i18next';

import { I18nNamespace } from '@/shared/i18n';
import { ImagePanel } from '@/shared/ui';

import { ProjectShotSectionRoot } from './ProjectShotSection.styled';

export function ProjectShotSection() {
  const { t } = useTranslation(I18nNamespace.Common);

  return (
    <ProjectShotSectionRoot>
      <ImagePanel
        animation="image"
        label={t('project.shot.imageLabel')}
        variant="wide"
      />
    </ProjectShotSectionRoot>
  );
}
