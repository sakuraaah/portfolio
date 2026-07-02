import type { ComponentType, PropsWithChildren } from 'react';

import { Box, Group, Text, Title } from '@mantine/core';
import styled from 'styled-components';

import {
  type AnimationPreset,
  PageWrap,
  animationStyles,
} from '@/shared/styles';

type AnimationProps = {
  $animation?: AnimationPreset;
};

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;
const StyledGroup = Group as unknown as ComponentType<StyledMantineProps>;
const StyledText = Text as unknown as ComponentType<StyledMantineProps>;
const StyledTitle = Title as unknown as ComponentType<StyledMantineProps>;

export const HeroSectionRoot = styled(PageWrap)`
  padding-block: 80px 96px;

  @media (max-width: 880px) {
    padding-block: 40px 72px;
  }
`;

export const HeroGrid = styled(StyledBox)`
  display: grid;
  grid-template-columns: 1fr 1.04fr;
  align-items: center;
  min-height: min(74vh, 640px);
  gap: 64px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 36px;
  }
`;

export const HeroTitle = styled(StyledTitle).attrs({
  order: 1,
})<AnimationProps>`
  margin: 0 0 28px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 68px;
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.02em;

  em {
    color: var(--accent);
    font-style: italic;
  }

  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 56px;
  }

  @media (max-width: 560px) {
    font-size: 44px;
  }
`;

export const HeroCopy = styled(StyledText)<AnimationProps>`
  max-width: 430px;
  margin: 0 0 38px;
  color: var(--text-2);
  font-size: 18.5px;
  line-height: 1.6;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 17px;
  }
`;

export const HeroActions = styled(StyledGroup)<AnimationProps>`
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
