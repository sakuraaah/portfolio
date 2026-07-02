import { useEffect, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@/shared/layout/Footer';
import { Header } from '@/shared/layout/Header';
import { MobileDrawer } from '@/shared/layout/MobileDrawer';

import { SiteRoot } from './SiteShell.styled';

type SiteShellProps = {
  profileName: string;
};

export function SiteShell({ profileName }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
