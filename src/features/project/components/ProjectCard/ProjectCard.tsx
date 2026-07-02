import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { useTranslatedProject } from '@/features/project/hooks';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import { CtaArrow, CtaRouterLink, ChipList, ImagePanel, MetaLine } from '@/shared/ui';

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
  const { t } = useTranslation(I18nNamespace.Projects);
  const translatedProject = useTranslatedProject(project);

  return (
    <ProjectCardRoot>
      <ImagePanel image={project.mainImage} variant="screen" />

      <ProjectCardBody>
        {project.latest && (
          <MetaLine
            status={t('status.latestProject')}
            year={project.year}
            type={translatedProject.type}
          />
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
            {t('actions.viewProject')}
            <CtaArrow />
          </CtaRouterLink>

          {project.github && (
            <ProjectCardSourceLink href={project.github}>
              <IconBrandGithub aria-hidden="true" />
              {t('actions.source')}
            </ProjectCardSourceLink>
          )}
        </ProjectCardActions>
      </ProjectCardBody>
    </ProjectCardRoot>
  );
}
