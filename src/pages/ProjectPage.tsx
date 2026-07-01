import { IconBrandGithub } from '@tabler/icons-react';

import { featuredProject } from '@/entities/project';

import { profile } from '@/shared/constants';

import {
  BackArrow,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
  FactLabel,
  FactLinks,
  Facts,
  Gallery,
  HighlightBlock,
  HighlightList,
  MoreActions,
  MoreInner,
  MoreSection,
  ProjectActions,
  ProjectBodyGrid,
  ProjectBodySection,
  ProjectDescription,
  ProjectHero,
  ProjectMeta,
  ProjectShotSection,
  ProjectTitle,
  SourceLink,
  Writeup,
  WriteupArticle,
} from './portfolio.styled';
import { ChipList, Fact, ImagePanel, MetaLine } from './portfolio.ui';

export function ProjectPage() {
  const project = featuredProject;

  return (
    <main>
      <ProjectHero>
        <CtaRouterLink $animation="fade" $plain to="/#work">
          <BackArrow />
          Selected work
        </CtaRouterLink>
        <ProjectMeta $animation="fadeDelay">
          <MetaLine project={project} />
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

      <ProjectShotSection>
        <ImagePanel
          animation="image"
          label="Lead project screenshot"
          variant="wide"
        />
      </ProjectShotSection>

      <ProjectBodySection>
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
      </ProjectBodySection>

      <MoreSection>
        <MoreInner>
          <h2>Want to see more?</h2>
          <MoreActions>
            <CtaRouterLink to="/#work">
              <BackArrow />
              Back to all work
            </CtaRouterLink>
            <CtaAnchor $muted href={`mailto:${profile.email}`}>
              Get in touch
              <CtaArrow />
            </CtaAnchor>
          </MoreActions>
        </MoreInner>
      </MoreSection>
    </main>
  );
}
