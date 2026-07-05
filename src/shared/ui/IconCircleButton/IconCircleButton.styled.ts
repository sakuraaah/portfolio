import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import { Button, type ButtonProps } from '@mantine/core';
import styled, { css } from 'styled-components';

type IconCircleButtonProps = ButtonProps &
  ComponentPropsWithoutRef<'button'> & {
  $shape?: 'circle' | 'pill';
};

const StyledButton = Button as unknown as ComponentType<IconCircleButtonProps>;

export const IconCircleButton = styled(StyledButton)<IconCircleButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  border: 1px solid var(--border);
  color: var(--text-2);
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  --button-bg: transparent;
  --button-color: var(--text-2);
  --button-hover: transparent;
  --button-hover-color: var(--accent);
  transition:
    border-color 250ms ease,
    color 250ms ease,
    background 250ms ease;

  ${({ $shape = 'circle' }) =>
    $shape === 'pill'
      ? css`
          gap: 8px;
          height: 38px;
          padding: 0 15px 0 13px;
          border-radius: 100px;
          font-size: 13.5px;
        `
      : css`
          aspect-ratio: 1;
          padding: 0;
          border-radius: 50%;
        `}

  &:hover,
  &:focus-visible {
    color: var(--accent);
    background: transparent;
    border-color: var(--accent);
  }

  &[data-active='true'] {
    color: var(--accent-contrast);
    background: var(--accent);
    border-color: var(--accent);
    --button-color: var(--accent-contrast);
    --button-hover: var(--accent);
    --button-hover-color: var(--accent-contrast);
    box-shadow: var(--sh-md);
  }

  .mantine-Button-inner {
    gap: 8px;
    justify-content: center;
  }

  .mantine-Button-section {
    margin: 0;
    font-size: 15px;
    line-height: 1;
  }
`;
