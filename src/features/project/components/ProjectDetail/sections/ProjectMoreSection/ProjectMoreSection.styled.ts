import { Box, Group } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import { headingStyles, revealMotionProps } from '@/features/project/styles';

export const MoreSection = styled(Box).attrs({ component: 'section' })`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
`;

export const MoreInner = styled(Box).attrs({
  component: motion.div,
  ...revealMotionProps,
})`
  width: 100%;
  max-width: 1180px;
  padding: 80px 40px;
  margin: 0 auto;
  text-align: center;

  h2 {
    ${headingStyles}
    margin: 0 0 28px;
    font-size: 40px;
  }

  @media (max-width: 880px) {
    padding-inline: 24px;

    h2 {
      font-size: 34px;
    }
  }
`;

export const MoreActions = styled(Group)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
