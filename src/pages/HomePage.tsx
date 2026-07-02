import { AboutSection } from '@/features/about';
import { ContactSection } from '@/features/contact';
import { HeroSection } from '@/features/hero';
import { ProjectListSection } from '@/features/project';

import { projects } from '@/shared/constants';

export function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <ProjectListSection projects={projects} />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
