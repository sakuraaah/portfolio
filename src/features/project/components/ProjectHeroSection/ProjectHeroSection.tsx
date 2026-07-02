import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { useTranslatedProject } from '@/features/project/hooks';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import { BackArrow, CtaAnchor, CtaArrow, CtaRouterLink } from '@/shared/styles';
import { MetaLine } from '@/shared/ui';

import {
  ProjectActions,
  ProjectDescription,
  ProjectHero,
  ProjectMeta,
  ProjectSourceLink,
  ProjectTitle,
} from './ProjectHeroSection.styled';

type ProjectHeroSectionProps = {
  project: Project;
};

export function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const { t } = useTranslation(I18nNamespace.Common);
  const translatedProject = useTranslatedProject(project);

  return (
    <ProjectHero>
      <CtaRouterLink $animation="fade" $plain to="/#work">
        <BackArrow />
        {t('project.actions.selectedWork')}
      </CtaRouterLink>

      <ProjectMeta $animation="fadeDelay">
        <MetaLine year={project.year} type={translatedProject.type} />
      </ProjectMeta>

      <ProjectTitle $animation="rise1">{translatedProject.title}</ProjectTitle>

      <ProjectDescription $animation="rise2">
        {translatedProject.description}
      </ProjectDescription>

      <ProjectActions $animation="rise3">
        {project.link && (
          <CtaAnchor href={project.link}>
            {t('project.actions.visitProject')}
            <CtaArrow />
          </CtaAnchor>
        )}

        {project.github && (
          <ProjectSourceLink href={project.github}>
            <IconBrandGithub aria-hidden="true" />
            {t('project.actions.source')}
          </ProjectSourceLink>
        )}
      </ProjectActions>
    </ProjectHero>
  );
}
