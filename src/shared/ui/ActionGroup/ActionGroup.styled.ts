import { Group } from '@mantine/core';
import styled, { css } from 'styled-components';

import { type AnimationPreset, animationStyles } from '@/shared/styles';

type ActionGroupProps = {
  $animation?: AnimationPreset;
  $stackOnMobile?: boolean;
};

export const ActionGroup = styled(Group)<ActionGroupProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;

  ${animationStyles}

  @media (max-width: 560px) {
    ${({ $stackOnMobile }) =>
      $stackOnMobile &&
      css`
        align-items: flex-start;
        flex-direction: column;
      `}
  }
`;
