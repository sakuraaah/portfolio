import { IconBrandGithub } from '@tabler/icons-react';

import {
  CtaArrow,
  CtaRouterLink,
  NavRouterLink,
  SourceLink,
} from '@/features/project/styles';

import { type Project } from '@/entities/project';

import { profile } from '@/shared/constants';
import { ChipList, ImagePanel, MetaLine } from '@/shared/ui';

import {
  ProjectCardActions,
  ProjectCardBody,
  ProjectCardRoot,
  ProjectCardTitle,
} from './ProjectCard.styled';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ProjectCardRoot>
      <ImagePanel label="Project screenshot" variant="screen" />
      <ProjectCardBody>
        <MetaLine year={project.year} type={project.type} />
        <ProjectCardTitle>
          <NavRouterLink to="/project">{project.title}</NavRouterLink>
        </ProjectCardTitle>
        <p>{project.description}</p>
        <ChipList items={project.stack} withFeatureSpacing />
        <ProjectCardActions>
          <CtaRouterLink to="/project">
            View project
            <CtaArrow />
          </CtaRouterLink>
          <SourceLink href={profile.github}>
            <IconBrandGithub aria-hidden="true" />
            Source
          </SourceLink>
        </ProjectCardActions>
      </ProjectCardBody>
    </ProjectCardRoot>
  );
}
