import { IconMenu2 } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { SITE_NAV_LINKS } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
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
          <HeaderNav aria-label={t('navigation.primary')} component="nav">
            {SITE_NAV_LINKS.map((link) => (
              <HeaderNavLink href={link.href} key={link.href}>
                {t(link.labelKey)}
              </HeaderNavLink>
            ))}
            <ThemePillButton
              aria-label={t('theme.controlLabel', { theme: themeLabel })}
              title={t('theme.controlLabel', { theme: themeLabel })}
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
            aria-label={t('menu.open')}
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
