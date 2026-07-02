import type { ComponentType, PropsWithChildren } from 'react';

import { Box, Text, Title } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import {
  headingStyles,
  pageWrapStyles,
  revealMotionProps,
} from '@/shared/styles';

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;
const StyledText = Text as unknown as ComponentType<StyledMantineProps>;
const StyledTitle = Title as unknown as ComponentType<StyledMantineProps>;

const MotionBox = motion.create(StyledBox);

export const AboutSectionRoot = styled(StyledBox).attrs({
  component: 'section',
})`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
`;

export const AboutGrid = styled(StyledBox)`
  ${pageWrapStyles}
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: start;
  gap: 64px;
  padding-block: 104px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-block: 80px;
  }
`;

export const AboutHeading = styled(MotionBox).attrs(revealMotionProps)``;

export const AboutTitle = styled(StyledTitle).attrs({ order: 2 })`
  ${headingStyles}
  margin: 0;
  font-size: 40px;
  line-height: 1.1;

  @media (max-width: 880px) {
    font-size: 34px;
  }
`;

export const AboutCopy = styled(MotionBox).attrs(revealMotionProps)`
  p {
    max-width: 520px;
    margin: 0;
    color: var(--text-2);
    font-size: 16.5px;
    line-height: 1.7;
  }
`;

export const AboutLede = styled(StyledText)`
  && {
    max-width: 760px;
    margin-bottom: 28px;
    color: var(--text);
    font-family: var(--serif);
    font-size: 28px;
    font-weight: 300;
    line-height: 1.45;
    letter-spacing: -0.01em;
  }

  @media (max-width: 880px) {
    && {
      font-size: 24px;
    }
  }
`;
