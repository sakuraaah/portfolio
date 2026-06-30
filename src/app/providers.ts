import { type ReactNode, createElement } from 'react';

import { MantineProvider } from '@mantine/core';

import { ThemeProvider } from '@/shared/theme';

export function AppProvider({ children }: { children: ReactNode }) {
  return createElement(
    MantineProvider,
    null,
    createElement(ThemeProvider, null, children)
  );
}
