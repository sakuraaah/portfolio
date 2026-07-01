import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { type AnimationPreset, animationStyles } from './motion.styled';

type CtaProps = {
  $animation?: AnimationPreset;
  $muted?: boolean;
  $plain?: boolean;
  $soft?: boolean;
};

export const CtaArrow = styled(IconArrowRight).attrs({
  'aria-hidden': true,
  size: 17,
  stroke: 1.8,
})`
  flex: none;
  transition: transform 300ms cubic-bezier(0.2, 0.65, 0.25, 1);
`;

export const BackArrow = styled(IconArrowLeft).attrs({
  'aria-hidden': true,
  size: 17,
  stroke: 1.8,
})`
  flex: none;
  transition: transform 300ms cubic-bezier(0.2, 0.65, 0.25, 1);
`;

const ctaStyles = css<CtaProps>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding-bottom: 3px;
  border-bottom: 1px solid currentColor;
  color: var(--text);
  font-family: var(--serif);
  font-size: 18px;
  text-decoration: none;
  transition:
    color 250ms ease,
    border-color 250ms ease;

  ${({ $soft }) =>
    $soft &&
    css`
      border-bottom-color: var(--border-strong);
    `}

  ${({ $muted }) =>
    $muted &&
    css`
      color: var(--text-2);
      border-bottom-color: transparent;
      font-style: italic;
    `}

  ${({ $plain }) =>
    $plain &&
    css`
      padding-bottom: 0;
      border-bottom: 0;
      color: var(--text-3);
      font-family: var(--sans);
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
    `}

  &:hover ${CtaArrow} {
    transform: translateX(4px);
  }

  &:hover ${BackArrow} {
    transform: translateX(-4px);
  }

  ${animationStyles}
`;

export const CtaAnchor = styled.a<CtaProps>`
  ${ctaStyles}
`;

export const CtaRouterLink = styled(Link)<CtaProps>`
  ${ctaStyles}
`;
