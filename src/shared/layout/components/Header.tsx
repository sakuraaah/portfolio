import { IconMenu2 } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { I18nNamespace } from '@/shared/i18n';
import { SITE_NAV_LINKS } from '@/shared/layout/constants';
import {
  THEME_PREFERENCE_ICONS,
  THEME_PREFERENCE_LABEL_KEYS,
  useTheme,
} from '@/shared/theme';

import {
  BrandLink,
  HeaderGroup,
  HeaderInner,
  HeaderNav,
  HeaderNavLink,
  HeaderRoot,
  MenuButton,
  ThemePillButton,
} from './Header.styled';

type HeaderProps = {
  menuOpen: boolean;
  profileName: string;
  onOpenMenu: () => void;
};

export function Header({ menuOpen, profileName, onOpenMenu }: HeaderProps) {
  const { cycleTheme, preference } = useTheme();
  const { t } = useTranslation(I18nNamespace.Common);
  const ThemeIcon = THEME_PREFERENCE_ICONS[preference];
  const themeLabel = t(THEME_PREFERENCE_LABEL_KEYS[preference]);

  return (
    <HeaderRoot>
      <HeaderInner fluid>
        <HeaderGroup justify="space-between" gap={24} wrap="nowrap">
          <BrandLink to="/">{profileName}</BrandLink>
          <HeaderNav aria-label="Primary navigation" component="nav">
            {SITE_NAV_LINKS.map((link) => (
              <HeaderNavLink href={link.href} key={link.href}>
                {link.label}
              </HeaderNavLink>
            ))}
            <ThemePillButton
              aria-label={`Theme: ${themeLabel}. Click to change`}
              title={`Theme: ${themeLabel}. Click to change`}
              type="button"
              variant="subtle"
              leftSection={
                <ThemeIcon aria-hidden="true" size={15} stroke={1.9} />
              }
              onClick={cycleTheme}
            >
              {themeLabel}
            </ThemePillButton>
          </HeaderNav>
          <MenuButton
            aria-controls="mobile-drawer"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            type="button"
            variant="subtle"
            onClick={onOpenMenu}
          >
            <IconMenu2 aria-hidden="true" size={18} stroke={1.8} />
          </MenuButton>
        </HeaderGroup>
      </HeaderInner>
    </HeaderRoot>
  );
}
