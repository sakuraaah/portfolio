import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import { ThemePreference } from './theme.enums';

export const THEME_PREFERENCES = [
  ThemePreference.Light,
  ThemePreference.Dark,
  ThemePreference.System,
] as const;

export const THEME_PREFERENCE_LABEL_KEYS = {
  [ThemePreference.Light]: 'theme.preference.light',
  [ThemePreference.Dark]: 'theme.preference.dark',
  [ThemePreference.System]: 'theme.preference.system',
} as const satisfies Record<ThemePreference, string>;

export const THEME_PREFERENCE_ICONS = {
  [ThemePreference.Light]: IconSun,
  [ThemePreference.Dark]: IconMoon,
  [ThemePreference.System]: IconDeviceDesktop,
} as const;
