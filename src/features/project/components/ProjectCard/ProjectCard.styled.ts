import type { ComponentType, PropsWithChildren } from 'react';

import { Anchor, Box, Group, Stack, Title } from '@mantine/core';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { revealHoverMotionProps } from '@/shared/styles';

type RouterAnchorProps = PropsWithChildren<{
  component?: typeof Link;
  to: string;
  underline?: string;
}>;

const RouterAnchor = Anchor as unknown as ComponentType<RouterAnchorProps>;

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

export const ProjectCardTitleLink = styled(RouterAnchor).attrs({
  component: Link,
  underline: 'never',
})`
  position: relative;
  color: var(--text);
  text-decoration: none;
  transition: color 250ms ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 300ms cubic-bezier(0.2, 0.65, 0.25, 1);
  }

  &:hover {
    color: var(--text);
  }

  &:hover::after {
    width: 100%;
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

export const ProjectCardSourceLink = styled(Anchor).attrs({
  underline: 'never',
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-3);
  font-size: 14.5px;
  font-weight: 500;
  text-decoration: none;
  transition: color 250ms ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    color: var(--text);
  }
`;
