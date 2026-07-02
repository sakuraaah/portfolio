import { useEffect, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@/shared/layout/Footer';
import { Header } from '@/shared/layout/Header';
import { MobileDrawer } from '@/shared/layout/MobileDrawer';

import { SiteRoot } from './SiteShell.styled';

type SiteShellProps = {
  profileName: string;
};

function getHashTargetId(hash: string) {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
}

export function SiteShell({ profileName }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const targetId = getHashTargetId(location.hash);
        const targetElement = document.getElementById(targetId);

        targetElement?.scrollIntoView();
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
