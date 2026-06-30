import { createContext } from 'react';

import type { ResolvedTheme, ThemePreference } from './theme.enums';

export type ThemeContextValue = {
  preference: ThemePreference;
  theme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
  cycleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
