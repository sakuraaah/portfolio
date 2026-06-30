export const ResolvedTheme = {
  Light: 'light',
  Dark: 'dark',
} as const;

export type ResolvedTheme = (typeof ResolvedTheme)[keyof typeof ResolvedTheme];

export const ThemePreference = {
  ...ResolvedTheme,
  System: 'system',
} as const;

export type ThemePreference =
  (typeof ThemePreference)[keyof typeof ThemePreference];
