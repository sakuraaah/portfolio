import { IconBrandGithub } from '@tabler/icons-react';

import {
  BackArrow,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
  SourceLink,
} from '@/features/project/styles';

import { type Project } from '@/entities/project';

import { profile } from '@/shared/constants';
import { MetaLine } from '@/shared/ui';

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
  return (
    <ProjectHero>
      <CtaRouterLink $animation="fade" $plain to="/#work">
        <BackArrow />
        Selected work
      </CtaRouterLink>
      <ProjectMeta $animation="fadeDelay">
        <MetaLine year={project.year} type={project.type} />
      </ProjectMeta>
      <ProjectTitle $animation="rise1">{project.title}</ProjectTitle>
      <ProjectDescription $animation="rise2">
        {project.description}
      </ProjectDescription>
      <ProjectActions $animation="rise3">
        <CtaAnchor href="#">
          Visit project
          <CtaArrow />
        </CtaAnchor>
        <SourceLink href={profile.github}>
          <IconBrandGithub aria-hidden="true" />
          Source
        </SourceLink>
      </ProjectActions>
    </ProjectHero>
  );
}
