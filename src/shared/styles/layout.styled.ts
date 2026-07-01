import { Box } from '@mantine/core';
import styled, { css } from 'styled-components';

export const pageWrapStyles = css`
  width: 100%;
  max-width: 1180px;
  padding-inline: 40px;
  margin: 0 auto;

  @media (max-width: 880px) {
    padding-inline: 24px;
  }
`;

export const PageWrap = styled(Box).attrs({ component: 'section' })`
  ${pageWrapStyles}
`;
