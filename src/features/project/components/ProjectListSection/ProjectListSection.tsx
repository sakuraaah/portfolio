import { ProjectCard } from '@/features/project/components/ProjectCard';
import { SectionHeading } from '@/features/project/styles';

import { type Project } from '@/entities/project';

import { projects as defaultProjects } from '@/shared/constants';
import { Eyebrow } from '@/shared/ui';

import {
  DotGroup,
  NextRow,
  ProjectList,
  ProjectListSectionRoot,
} from './ProjectListSection.styled';

type ProjectListSectionProps = {
  projects?: Project[];
};

export function ProjectListSection({
  projects = defaultProjects,
}: ProjectListSectionProps) {
  return (
    <ProjectListSectionRoot id="work">
      <SectionHeading>
        <div>
          <Eyebrow label="Selected work" />
          <h2>Things I&apos;ve built.</h2>
        </div>
        <p>An evolving showcase &mdash; each project added as it ships.</p>
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
        <p>
          More projects are being migrated over from GitHub. This space grows as
          they land.
        </p>
      </NextRow>
    </ProjectListSectionRoot>
  );
}
