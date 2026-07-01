import { Box, Stack } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import {
  PageWrap,
  headingStyles,
  revealMotionProps,
} from '@/features/project/styles';

export const ProjectBodySectionRoot = styled(PageWrap)`
  padding-block: 80px;
`;

export const ProjectBodyGrid = styled(Box)`
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: start;
  gap: 72px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const Facts = styled(Box).attrs({
  component: motion.aside,
  ...revealMotionProps,
})`
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 920px) {
    position: static;
  }
`;

export const FactLinks = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
`;

export const Writeup = styled(Box)`
  max-width: 680px;
`;

export const WriteupArticle = styled(Box).attrs({
  component: motion.article,
  ...revealMotionProps,
})`
  h2 {
    ${headingStyles}
    margin: 0 0 18px;
    font-size: 28px;
  }

  p {
    margin: 0 0 20px;
    color: var(--text-2);
    font-size: 17.5px;
    line-height: 1.75;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const HighlightBlock = styled(WriteupArticle)`
  margin-top: 48px;
`;

export const HighlightList = styled(Box).attrs({ component: 'ul' })`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    color: var(--text-2);
    font-size: 16.5px;
    line-height: 1.6;
  }

  li span {
    flex: none;
    width: 6px;
    height: 6px;
    margin-top: 9px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

export const Gallery = styled(Box).attrs({
  component: motion.div,
  ...revealMotionProps,
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 56px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;
