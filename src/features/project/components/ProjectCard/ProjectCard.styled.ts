import { Box, Group, Stack, Title } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import { revealHoverMotionProps } from '@/features/project/styles';

export const ProjectCardRoot = styled(Box).attrs({
  component: motion.article,
  ...revealHoverMotionProps,
})`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--sh-md);
  transition: box-shadow 400ms cubic-bezier(0.2, 0.65, 0.25, 1);

  &:hover {
    box-shadow: var(--sh-lg);
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCardBody = styled(Stack)`
  display: flex;
  flex-direction: column;
  padding: 48px 48px 44px;

  > p {
    margin: 0 0 28px;
    color: var(--text-2);
    font-size: 16px;
    line-height: 1.65;
  }

  @media (max-width: 880px) {
    padding: 36px 28px;
  }
`;

export const ProjectCardTitle = styled(Title).attrs({ order: 3 })`
  margin: 0 0 16px;
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.02em;

  @media (max-width: 560px) {
    font-size: 30px;
  }
`;

export const ProjectCardActions = styled(Group)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: auto;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
