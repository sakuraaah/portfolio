import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { useTranslatedProject } from '@/features/project/hooks';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import { CtaArrow, CtaRouterLink } from '@/shared/styles';
import { ChipList, ImagePanel, MetaLine } from '@/shared/ui';

import {
  ProjectCardActions,
  ProjectCardBody,
  ProjectCardRoot,
  ProjectCardSourceLink,
  ProjectCardTitle,
  ProjectCardTitleLink,
} from './ProjectCard.styled';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation(I18nNamespace.Common);
  const translatedProject = useTranslatedProject(project);

  return (
    <ProjectCardRoot>
      <ImagePanel label={t('project.card.imageLabel')} variant="screen" />

      <ProjectCardBody>
        {project.latest && (
          <MetaLine year={project.year} type={translatedProject.type} />
        )}

        <ProjectCardTitle>
          <ProjectCardTitleLink to={`/${project.id}`}>
            {translatedProject.title}
          </ProjectCardTitleLink>
        </ProjectCardTitle>

        <p>{translatedProject.description}</p>

        <ChipList items={translatedProject.stack} withFeatureSpacing />

        <ProjectCardActions>
          <CtaRouterLink to={`/${project.id}`}>
            {t('project.actions.viewProject')}
            <CtaArrow />
          </CtaRouterLink>

          {project.github && (
            <ProjectCardSourceLink href={project.github}>
              <IconBrandGithub aria-hidden="true" />
              {t('project.actions.source')}
            </ProjectCardSourceLink>
          )}
        </ProjectCardActions>
      </ProjectCardBody>
    </ProjectCardRoot>
  );
}
