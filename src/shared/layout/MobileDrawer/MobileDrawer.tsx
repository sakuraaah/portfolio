import { Drawer } from '@mantine/core';
import { IconArrowRight, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { SITE_NAV_LINKS } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
import {
  THEME_PREFERENCES,
  THEME_PREFERENCE_ICONS,
  THEME_PREFERENCE_LABEL_KEYS,
  useTheme,
} from '@/shared/theme';

import {
  DrawerAppearance,
  DrawerBrand,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerLink,
  DrawerLinks,
  ThemeDotButton,
  ThemeDotGroup,
} from './MobileDrawer.styled';

type MobileDrawerProps = {
  menuOpen: boolean;
  profileName: string;
  onClose: () => void;
};

export function MobileDrawer({
  menuOpen,
  profileName,
  onClose,
}: MobileDrawerProps) {
  const { preference: themePreference, setPreference } = useTheme();
  const { t } = useTranslation(I18nNamespace.Common);
  const themeLabel = t(THEME_PREFERENCE_LABEL_KEYS[themePreference]);

  return (
    <Drawer
      aria-label={t('menu.mobileNavigation')}
      closeOnClickOutside
      closeOnEscape
      id="mobile-drawer"
      lockScroll
      opened={menuOpen}
      padding={0}
      position="right"
      size="min(82vw, 310px)"
      transitionProps={{
        duration: 420,
        timingFunction: 'cubic-bezier(0.2, 0.65, 0.25, 1)',
      }}
      withCloseButton={false}
      zIndex={200}
      onClose={onClose}
      styles={{
        body: {
          height: '100%',
          padding: 0,
        },
        content: {
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          borderRadius: 0,
          boxShadow: 'var(--sh-lg)',
        },
        inner: {
          padding: 0,
        },
        overlay: {
          backdropFilter: 'blur(2px)',
          background: 'color-mix(in oklab, var(--text) 38%, transparent)',
        },
      }}
    >
      <DrawerContent>
        <DrawerHeader align="center" justify="space-between">
          <DrawerBrand>{profileName}</DrawerBrand>
          <DrawerCloseButton
            aria-label={t('menu.close')}
            type="button"
            variant="subtle"
            onClick={onClose}
          >
            <IconX aria-hidden="true" size={17} stroke={1.8} />
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerLinks aria-label={t('menu.mobileNavigation')} component="nav">
          {SITE_NAV_LINKS.map((link) => (
            <DrawerLink href={link.href} key={link.href} onClick={onClose}>
              {t(link.labelKey)}
              <IconArrowRight aria-hidden="true" className="cta-arrow" />
            </DrawerLink>
          ))}
        </DrawerLinks>
        <DrawerFooter>
          <DrawerAppearance align="baseline" justify="space-between">
            <span>{t('menu.appearance')}</span>
            <strong>{themeLabel}</strong>
          </DrawerAppearance>
          <ThemeDotGroup role="group" aria-label={t('theme.groupLabel')}>
            {THEME_PREFERENCES.map((preference) => {
              const ThemeIcon = THEME_PREFERENCE_ICONS[preference];
              const preferenceLabel = t(
                THEME_PREFERENCE_LABEL_KEYS[preference]
              );

              return (
                <ThemeDotButton
                  aria-label={t('theme.optionLabel', {
                    theme: preferenceLabel,
                  })}
                  data-active={
                    themePreference === preference ? 'true' : undefined
                  }
                  data-val={preference}
                  key={preference}
                  type="button"
                  variant="subtle"
                  onClick={() => setPreference(preference)}
                >
                  <ThemeIcon aria-hidden="true" size={18} stroke={1.9} />
                </ThemeDotButton>
              );
            })}
          </ThemeDotGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
