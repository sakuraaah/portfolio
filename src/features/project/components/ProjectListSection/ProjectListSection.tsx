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
  const { t } = useTranslation(I18nNamespace.Common);

  return (
    <ProjectListSectionRoot id="work">
      <SectionHeading>
        <div>
          <Eyebrow label={t('project.list.eyebrow')} />
          <h2>{t('project.list.title')}</h2>
        </div>
        <p>{t('project.list.copy')}</p>
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
        <p>{t('project.list.more')}</p>
      </NextRow>
    </ProjectListSectionRoot>
  );
}
