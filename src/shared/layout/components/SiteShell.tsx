import { useEffect, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { MobileDrawer } from './MobileDrawer';
import { SiteRoot } from './SiteShell.styled';

type SiteShellProps = {
  profileName: string;
};

export function SiteShell({ profileName }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal')
    );

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in'));
      return;
    }

    revealEls.forEach((el) => el.classList.remove('in'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    requestAnimationFrame(() => {
      revealEls.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      });
      return;
    }

    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <SiteRoot>
      <Header
        menuOpen={isMenuOpen}
        profileName={profileName}
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      <MobileDrawer
        menuOpen={isMenuOpen}
        profileName={profileName}
        onClose={() => setIsMenuOpen(false)}
      />
      <Outlet />
      <Footer profileName={profileName} />
    </SiteRoot>
  );
}
