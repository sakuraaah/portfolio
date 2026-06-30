import { type ReactNode, useEffect, useMemo, useState } from 'react';

import { THEME_PREFERENCES } from './theme.constants';
import { ThemeContext, type ThemeContextValue } from './theme.context';
import { ResolvedTheme, ThemePreference } from './theme.enums';

const THEME_STORAGE_KEY = 'pf-theme';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return ResolvedTheme.Light;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ResolvedTheme.Dark
    : ResolvedTheme.Light;
}

function isThemePreference(value: string | null): value is ThemePreference {
  return Object.values(ThemePreference).includes(value as ThemePreference);
}

function getStoredThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return ThemePreference.System;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  return isThemePreference(stored) ? stored : ThemePreference.System;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<ThemePreference>(
    getStoredThemePreference
  );
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);
  const theme: ResolvedTheme =
    preference === ThemePreference.System ? systemTheme : preference;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themepref = preference;
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  }, [preference, theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = () =>
      setSystemTheme(media.matches ? ResolvedTheme.Dark : ResolvedTheme.Light);

    updateSystemTheme();
    media.addEventListener('change', updateSystemTheme);

    return () => media.removeEventListener('change', updateSystemTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      preference,
      theme,
      systemTheme,
      setPreference,
      cycleTheme: () => {
        const nextIndex =
          (THEME_PREFERENCES.indexOf(preference) + 1) %
          THEME_PREFERENCES.length;

        setPreference(THEME_PREFERENCES[nextIndex]);
      },
    }),
    [preference, systemTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
