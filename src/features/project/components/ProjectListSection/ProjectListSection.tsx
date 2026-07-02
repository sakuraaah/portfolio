import { useTranslation } from 'react-i18next';

import { ProjectCard } from '@/features/project/components/ProjectCard';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import { Eyebrow } from '@/shared/ui';

import {
  DotGroup,
  NextRow,
  ProjectList,
  ProjectListSectionRoot,
  SectionHeading,
} from './ProjectListSection.styled';

type ProjectListSectionProps = {
  projects: Project[];
};

export function ProjectListSection({ projects }: ProjectListSectionProps) {
  const { t } = useTranslation(I18nNamespace.Projects);

  return (
    <ProjectListSectionRoot id="work">
      <SectionHeading>
        <div>
          <Eyebrow label={t('list.eyebrow')} />
          <h2>{t('list.title')}</h2>
        </div>
        <p>{t('list.copy')}</p>
      </SectionHeading>

      <ProjectList>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>

      <NextRow>
        <DotGroup aria-hidden="true">
          <span />
          <span />
          <span />
        </DotGroup>
        <p>{t('list.more')}</p>
      </NextRow>
    </ProjectListSectionRoot>
  );
}
