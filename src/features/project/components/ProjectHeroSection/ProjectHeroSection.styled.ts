import type { ComponentType, PropsWithChildren } from 'react';

import { Anchor, Box, Group, Text, Title } from '@mantine/core';
import styled from 'styled-components';

import {
  type AnimationPreset,
  PageWrap,
  animationStyles,
} from '@/shared/styles';
import { CtaRouterLink } from '@/shared/ui';

type AnimationProps = {
  $animation?: AnimationPreset;
};

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;
const StyledGroup = Group as unknown as ComponentType<StyledMantineProps>;
const StyledText = Text as unknown as ComponentType<StyledMantineProps>;
const StyledTitle = Title as unknown as ComponentType<StyledMantineProps>;

export const ProjectHero = styled(PageWrap)`
  padding-block: 56px 48px;

  > ${CtaRouterLink} {
    margin-bottom: 36px;
  }

  @media (max-width: 560px) {
    padding-top: 40px;
  }
`;

export const ProjectMeta = styled(StyledBox)<AnimationProps>`
  margin-bottom: 20px;
  ${animationStyles}
`;

export const ProjectTitle = styled(StyledTitle).attrs({
  order: 1,
})<AnimationProps>`
  max-width: 14ch;
  margin: 0 0 24px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 76px;
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.025em;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 58px;
  }

  @media (max-width: 560px) {
    font-size: 44px;
  }
`;

export const ProjectDescription = styled(StyledText)<AnimationProps>`
  max-width: 620px;
  margin: 0 0 36px;
  color: var(--text-2);
  font-size: 22px;
  line-height: 1.55;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 19px;
  }
`;

export const ProjectActions = styled(StyledGroup)<AnimationProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  ${animationStyles}

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ProjectSourceLink = styled(Anchor).attrs({ underline: 'never' })`
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
