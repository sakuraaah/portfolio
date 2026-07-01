import { ActionIcon } from '@mantine/core';
import styled from 'styled-components';

export const IconCircleButton = styled(ActionIcon)`
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-2);
  background: transparent;
  cursor: pointer;
  --ai-hover: transparent;
  transition:
    border-color 250ms ease,
    color 250ms ease,
    background 250ms ease;

  &:hover,
  &:focus-visible {
    color: var(--accent);
    border-color: var(--accent);
  }
`;
