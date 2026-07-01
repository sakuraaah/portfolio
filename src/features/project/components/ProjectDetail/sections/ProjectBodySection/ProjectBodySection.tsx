import { CtaAnchor, CtaArrow } from '@/features/project/styles';

import { type Project } from '@/entities/project';

import { ChipList, Fact, FactLabel, ImagePanel } from '@/shared/ui';

import {
  FactLinks,
  Facts,
  Gallery,
  HighlightBlock,
  HighlightList,
  ProjectBodyGrid,
  ProjectBodySectionRoot,
  Writeup,
  WriteupArticle,
} from './ProjectBodySection.styled';

type ProjectBodySectionProps = {
  project: Project;
};

export function ProjectBodySection({ project }: ProjectBodySectionProps) {
  return (
    <ProjectBodySectionRoot>
      <ProjectBodyGrid>
        <Facts>
          <Fact label="Year" value={project.year} />
          <Fact label="Role" value={project.role} />
          <div>
            <FactLabel>Stack</FactLabel>
            <ChipList items={project.stack} />
          </div>
          <FactLinks>
            <CtaAnchor $plain href="#">
              Visit project
              <CtaArrow />
            </CtaAnchor>
            <CtaAnchor $muted $plain href="#">
              View source
              <CtaArrow />
            </CtaAnchor>
          </FactLinks>
        </Facts>

        <Writeup>
          <WriteupArticle>
            <h2>Overview</h2>
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </WriteupArticle>

          <HighlightBlock>
            <h2>Highlights</h2>
            <HighlightList>
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </HighlightList>
          </HighlightBlock>

          <Gallery>
            <ImagePanel label="Screenshot" variant="gallery" />
            <ImagePanel label="Screenshot" variant="gallery" />
          </Gallery>
        </Writeup>
      </ProjectBodyGrid>
    </ProjectBodySectionRoot>
  );
}
