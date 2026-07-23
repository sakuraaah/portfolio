import type { ComponentType, PropsWithChildren } from 'react';

import { Box } from '@mantine/core';
import styled from 'styled-components';

import {
  type AnimationPreset,
  PageWrap,
  animationStyles,
} from '@/shared/styles';
import {
  ActionGroup,
  CtaRouterLink,
  DisplayTitle,
  LeadText,
} from '@/shared/ui';

type AnimationProps = {
  $animation?: AnimationPreset;
};

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;

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

export const ProjectTitle = styled(DisplayTitle)`
  max-width: 14ch;
  margin: 0 0 24px;
  font-size: 76px;
  line-height: 1.02;
  letter-spacing: -0.025em;

  @media (max-width: 880px) {
    font-size: 58px;
  }

  @media (max-width: 560px) {
    font-size: 44px;
  }
`;

export const ProjectDescription = styled(LeadText)`
  max-width: 620px;
  margin: 0 0 36px;
  font-size: 22px;
  line-height: 1.55;

  @media (max-width: 880px) {
    font-size: 19px;
  }
`;

export const ProjectActions = styled(ActionGroup).attrs({
  $stackOnMobile: true,
})``;
