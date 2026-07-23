import type { ComponentType, PropsWithChildren } from 'react';

import { Box } from '@mantine/core';
import styled from 'styled-components';

import { PageWrap } from '@/shared/styles';

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;

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
