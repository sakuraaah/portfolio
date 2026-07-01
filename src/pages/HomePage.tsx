import { IconBrandGithub } from '@tabler/icons-react';

import { type Project, featuredProject } from '@/entities/project';

import { profile } from '@/shared/constants';

import {
  AboutCopy,
  AboutGrid,
  AboutHeading,
  AboutLede,
  AboutSectionRoot,
  ContactCard,
  ContactSectionRoot,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
  DotGroup,
  EmailLink,
  Feature,
  FeatureActions,
  FeatureBody,
  FeatureTitle,
  HeroActions,
  HeroCopy,
  HeroGrid,
  HeroSection,
  HeroTitle,
  HeroTitleLine,
  NavRouterLink,
  NextRow,
  SectionHeading,
  SourceLink,
  WorkSectionRoot,
} from './portfolio.styled';
import {
  ChipList,
  Eyebrow,
  ImagePanel,
  MetaLine,
  SocialLinks,
} from './portfolio.ui';

export function HomePage() {
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
