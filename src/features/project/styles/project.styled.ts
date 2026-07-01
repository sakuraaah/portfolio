import type { ComponentType, PropsWithChildren } from 'react';

import { Anchor, Group } from '@mantine/core';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { headingStyles, revealMotionProps } from '@/shared/styles';

type RouterAnchorProps = PropsWithChildren<{
  component?: typeof Link;
  to: string;
  underline?: string;
}>;

const RouterAnchor = Anchor as unknown as ComponentType<RouterAnchorProps>;

export const NavRouterLink = styled(RouterAnchor).attrs({
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

const MotionGroup = motion.create(Group);

export const SectionHeading = styled(MotionGroup).attrs(revealMotionProps)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
  margin-bottom: 56px;
  border-bottom: 1px solid var(--border);

  h2 {
    ${headingStyles}
    margin: 0;
    font-size: 42px;
    line-height: 1.1;
  }

  p {
    max-width: 280px;
    margin: 0;
    color: var(--text-3);
    font-size: 14.5px;
    line-height: 1.6;
    text-align: right;
  }

  @media (max-width: 880px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 40px;

    h2 {
      font-size: 34px;
    }

    p {
      max-width: 100%;
      text-align: left;
    }
  }
`;

export const SourceLink = styled(Anchor).attrs({ underline: 'never' })`
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
