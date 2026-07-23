import { Anchor } from '@mantine/core';
import styled from 'styled-components';

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
