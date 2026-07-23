import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { useTranslatedProject } from '@/features/project/hooks';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import {
  BackArrow,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
  MetaLine,
  SourceLink,
} from '@/shared/ui';

import {
  ProjectActions,
  ProjectDescription,
  ProjectHero,
  ProjectMeta,
  ProjectTitle,
} from './ProjectHeroSection.styled';

type ProjectHeroSectionProps = {
  project: Project;
};

export function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const { t } = useTranslation(I18nNamespace.Projects);
  const translatedProject = useTranslatedProject(project);

  return (
    <ProjectHero>
      <CtaRouterLink $animation="fade" $plain to="/#work">
        <BackArrow />
        {t('actions.selectedWork')}
      </CtaRouterLink>

      <ProjectMeta $animation="fadeDelay">
        <MetaLine
          status={t('status.latestProject')}
          year={project.year}
          type={translatedProject.type}
        />
      </ProjectMeta>

      <ProjectTitle $animation="rise1">{translatedProject.title}</ProjectTitle>

      <ProjectDescription $animation="rise2">
        {translatedProject.description}
      </ProjectDescription>

      <ProjectActions $animation="rise3">
        {project.link && (
          <CtaAnchor href={project.link}>
            {t('actions.visitProject')}
            <CtaArrow />
          </CtaAnchor>
        )}

        {project.github && (
          <SourceLink href={project.github}>
            <IconBrandGithub aria-hidden="true" />
            {t('actions.source')}
          </SourceLink>
        )}
      </ProjectActions>
    </ProjectHero>
  );
}
