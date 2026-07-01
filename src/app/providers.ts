import { type ReactNode, createElement } from 'react';

import { MantineProvider } from '@mantine/core';
import { MotionConfig } from 'motion/react';

import { ThemeProvider } from '@/shared/theme';

import { mantineTheme } from './mantineTheme';

export function AppProvider({ children }: { children: ReactNode }) {
  return createElement(
    MantineProvider,
    { theme: mantineTheme },
    createElement(
      MotionConfig,
      { reducedMotion: 'user' },
      createElement(ThemeProvider, null, children)
    )
  );
}
