import { Box, Group, Stack } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import { PageWrap, revealMotionProps } from '@/features/project/styles';

export const ProjectListSectionRoot = styled(PageWrap)`
  padding-block: 40px 120px;

  @media (max-width: 880px) {
    padding-bottom: 88px;
  }
`;

export const ProjectList = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const NextRow = styled(Group).attrs({
  component: motion.div,
  ...revealMotionProps,
})`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  padding: 24px 28px;
  border: 1px dashed var(--border-strong);
  border-radius: 8px;
  color: var(--text-3);

  p {
    margin: 0;
    font-size: 14.5px;
    line-height: 1.55;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    padding: 20px;
  }
`;

export const DotGroup = styled(Box).attrs({ component: 'span' })`
  display: flex;
  gap: 5px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--text-3);
  }

  span:nth-child(1) {
    opacity: 0.5;
  }

  span:nth-child(2) {
    opacity: 0.35;
  }

  span:nth-child(3) {
    opacity: 0.2;
  }
`;
