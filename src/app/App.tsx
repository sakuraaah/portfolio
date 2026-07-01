import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import { Route, Routes } from 'react-router-dom';

import { SiteShell } from '@/shared/layout';

import {
  AboutCopy,
  AboutGrid,
  AboutHeading,
  AboutLede,
  AboutSectionRoot,
  BackArrow,
  Chip,
  Chips,
  ContactCard,
  ContactSectionRoot,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
  DotGroup,
  EmailLink,
  EyebrowLine,
  EyebrowRoot,
  EyebrowText,
  FactLabel,
  FactLinks,
  FactValue,
  Facts,
  Feature,
  FeatureActions,
  FeatureBody,
  FeatureTitle,
  Gallery,
  HeroActions,
  HeroCopy,
  HeroGrid,
  HeroSection,
  HeroTitle,
  HeroTitleLine,
  HighlightBlock,
  HighlightList,
  ImagePanelContent,
  ImagePanelRoot,
  MetaDate,
  MetaLineRoot,
  MoreActions,
  MoreInner,
  MoreSection,
  NavRouterLink,
  NextRow,
  ProjectActions,
  ProjectBodyGrid,
  ProjectBodySection,
  ProjectDescription,
  ProjectHero,
  ProjectMeta,
  ProjectShotSection,
  ProjectTitle,
  SectionHeading,
  SocialLink,
  SocialLinksRoot,
  SourceLink,
  StatusDot,
  StatusPill,
  WorkSectionRoot,
  Writeup,
  WriteupArticle,
} from './App.styled';
import { AppProvider } from './providers';

type Project = {
  title: string;
  year: string;
  role: string;
  type: string;
  description: string;
  stack: string[];
  overview: string[];
  highlights: string[];
};

const profile = {
  name: 'Alex Rivera',
  role: 'Full-stack engineer',
  email: 'hello@alexrivera.dev',
  github: '#',
  linkedin: '#',
  x: '#',
};

const featuredProject: Project = {
  title: 'Project Name',
  year: '2026',
  role: 'Design & engineering',
  type: 'Full-stack build',
  description:
    'A short, confident description of what this product does, the problem it solves, and what makes the build worth showing. Swap this for the real story.',
  stack: ['React', 'TypeScript', 'Node', 'Postgres'],
  overview: [
    "Open with the context: what this product is, who it's for, and the problem that made it worth building. Keep it human: a paragraph or two is plenty.",
    'Then say what you actually did: the parts you designed, the systems you built, and the tradeoffs you made along the way. This is the story the project card on the home page only hints at.',
  ],
  highlights: [
    'A standout feature or technical decision worth calling out.',
    "A measurable outcome, or something you're proud of in the build.",
    'A detail that shows the care that went into it.',
  ],
};

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<SiteShell profileName={profile.name} />}>
          <Route index element={<HomePage />} />
          <Route
            path="project"
            element={<ProjectPage project={featuredProject} />}
          />
        </Route>
      </Routes>
    </AppProvider>
  );
}

function HomePage() {
  return (
    <main id="top">
      <Hero />
      <WorkSection project={featuredProject} />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

function Hero() {
  return (
    <HeroSection>
      <HeroGrid>
        <div>
          <Eyebrow label={profile.role} animated />
          <HeroTitle>
            <HeroTitleLine $animation="rise1">Crafting software</HeroTitleLine>
            <HeroTitleLine $animation="rise2">
              that feels <em>effortless</em>.
            </HeroTitleLine>
          </HeroTitle>
          <HeroCopy $animation="rise3">
            A selection of products I&apos;ve designed, built, and shipped
            &mdash; from the interface down to the data layer.
          </HeroCopy>
          <HeroActions $animation="rise4">
            <CtaAnchor href="#work">
              View selected work
              <CtaArrow />
            </CtaAnchor>
            <SocialLinks size="sm" />
          </HeroActions>
        </div>
        <ImagePanel
          animation="image"
          label="Portrait / feature image"
          variant="portrait"
        />
      </HeroGrid>
    </HeroSection>
  );
}

function WorkSection({ project }: { project: Project }) {
  return (
    <WorkSectionRoot id="work">
      <SectionHeading>
        <div>
          <Eyebrow label="Selected work" />
          <h2>Things I&apos;ve built.</h2>
        </div>
        <p>An evolving showcase &mdash; each project added as it ships.</p>
      </SectionHeading>

      <Feature>
        <ImagePanel label="Project screenshot" variant="screen" />
        <FeatureBody>
          <MetaLine project={project} />
          <FeatureTitle>
            <NavRouterLink to="/project">{project.title}</NavRouterLink>
          </FeatureTitle>
          <p>{project.description}</p>
          <ChipList items={project.stack} />
          <FeatureActions>
            <CtaRouterLink to="/project">
              View project
              <CtaArrow />
            </CtaRouterLink>
            <SourceLink href={profile.github}>
              <IconBrandGithub aria-hidden="true" />
              Source
            </SourceLink>
          </FeatureActions>
        </FeatureBody>
      </Feature>

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
    </WorkSectionRoot>
  );
}

function ProjectPage({ project }: { project: Project }) {
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

function AboutSection() {
  return (
    <AboutSectionRoot id="about">
      <AboutGrid>
        <AboutHeading>
          <Eyebrow label="About" />
          <h2>A few words.</h2>
        </AboutHeading>
        <AboutCopy>
          <AboutLede>
            I build software end to end, designing the interface, wiring the
            logic, and shipping it to people who use it every day.
          </AboutLede>
          <p>
            My focus is on products that feel calm and considered: clear
            interfaces, solid foundations, and the small details that make
            something a pleasure to use. This site is a running record of that
            work, nothing more, nothing less.
          </p>
        </AboutCopy>
      </AboutGrid>
    </AboutSectionRoot>
  );
}

function ContactSection() {
  return (
    <ContactSectionRoot id="contact">
      <ContactCard>
        <Eyebrow label="Contact" centered />
        <h2>
          Always happy to <em>talk shop</em>.
        </h2>
        <p>
          Questions about a project, or just want to compare notes? You&apos;ll
          find me here.
        </p>
        <EmailLink $soft href={`mailto:${profile.email}`}>
          {profile.email}
          <CtaArrow />
        </EmailLink>
        <SocialLinks size="lg" />
      </ContactCard>
    </ContactSectionRoot>
  );
}

function Eyebrow({
  label,
  animated = false,
  centered = false,
}: {
  label: string;
  animated?: boolean;
  centered?: boolean;
}) {
  return (
    <EyebrowRoot $animated={animated} $centered={centered}>
      <EyebrowLine />
      <EyebrowText>{label}</EyebrowText>
      {centered && <EyebrowLine />}
    </EyebrowRoot>
  );
}

function MetaLine({ project }: { project: Project }) {
  return (
    <MetaLineRoot>
      <StatusPill>
        <StatusDot aria-hidden="true" />
        Latest project
      </StatusPill>
      <MetaDate>
        {project.year} &middot; {project.type}
      </MetaDate>
    </MetaLineRoot>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <Chips>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </Chips>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <FactLabel>{label}</FactLabel>
      <FactValue>{value}</FactValue>
    </div>
  );
}

function ImagePanel({
  animation,
  label,
  variant,
}: {
  animation?:
    'fade' | 'fadeDelay' | 'image' | 'rise1' | 'rise2' | 'rise3' | 'rise4';
  label: string;
  variant: 'portrait' | 'screen' | 'wide' | 'gallery';
}) {
  return (
    <ImagePanelRoot $animation={animation} $variant={variant}>
      <ImagePanelContent>
        <span>{label}</span>
      </ImagePanelContent>
    </ImagePanelRoot>
  );
}

function SocialLinks({ size }: { size: 'sm' | 'lg' }) {
  return (
    <SocialLinksRoot $size={size}>
      <SocialLink $size={size} href={profile.github} aria-label="GitHub">
        <IconBrandGithub aria-hidden="true" />
      </SocialLink>
      <SocialLink $size={size} href={profile.linkedin} aria-label="LinkedIn">
        <IconBrandLinkedin aria-hidden="true" />
      </SocialLink>
      <SocialLink $size={size} href={profile.x} aria-label="X">
        <IconBrandX aria-hidden="true" />
      </SocialLink>
    </SocialLinksRoot>
  );
}

export default App;
