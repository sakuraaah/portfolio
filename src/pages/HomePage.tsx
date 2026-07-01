import { ProjectListSection } from '@/features/project';

import { profile } from '@/shared/constants';
import { CtaAnchor, CtaArrow } from '@/shared/styles';
import { Eyebrow, ImagePanel, SocialLinks } from '@/shared/ui';

import {
  AboutCopy,
  AboutGrid,
  AboutHeading,
  AboutLede,
  AboutSectionRoot,
  ContactCard,
  ContactSectionRoot,
  EmailLink,
  HeroActions,
  HeroCopy,
  HeroGrid,
  HeroSection,
  HeroTitle,
  HeroTitleLine,
} from './portfolio.styled';

export function HomePage() {
  return (
    <main id="top">
      <Hero />
      <ProjectListSection />
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
          <Eyebrow label={profile.role} animated heroSpacing />
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
