import type { ComponentType, PropsWithChildren } from 'react';

import { Text, Title } from '@mantine/core';
import styled from 'styled-components';

import {
  type AnimationPreset,
  animationStyles,
  headingStyles,
} from '@/shared/styles';

type AnimationProps = {
  $animation?: AnimationPreset;
};

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledText = Text as unknown as ComponentType<StyledMantineProps>;
const StyledTitle = Title as unknown as ComponentType<StyledMantineProps>;

export const DisplayTitle = styled(StyledTitle).attrs({
  order: 1,
})<AnimationProps>`
  ${headingStyles}
  margin: 0 0 28px;
  font-size: 68px;
  line-height: 1.04;

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

export const LeadText = styled(StyledText)<AnimationProps>`
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
