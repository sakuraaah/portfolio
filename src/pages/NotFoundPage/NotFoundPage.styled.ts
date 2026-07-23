import type { ComponentType, PropsWithChildren } from 'react';

import { Box } from '@mantine/core';
import styled from 'styled-components';

import { pageWrapStyles } from '@/shared/styles';

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledBox = Box as unknown as ComponentType<StyledMantineProps>;

export const NotFoundMain = styled.main`
  ${pageWrapStyles}
  display: grid;
  align-items: center;
  min-height: calc(100vh - 74px - 83px);
  padding-block: 72px;

  @media (max-width: 880px) {
    min-height: auto;
    padding-block: 64px 80px;
  }

  @media (max-width: 560px) {
    padding-block: 48px 64px;
  }
`;

export const NotFoundGrid = styled(StyledBox)`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  align-items: center;
  gap: clamp(52px, 8vw, 112px);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

export const NotFoundCopy = styled.div`
  max-width: 530px;
`;

export const NotFoundArtwork = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 430px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 2px;
  background:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px), var(--surface);
  background-size: 52px 52px;
  box-shadow: var(--sh-md);
  animation: artworkReveal 1100ms 180ms both cubic-bezier(0.2, 0.65, 0.25, 1);

  &::after {
    position: absolute;
    inset: 18px;
    z-index: -1;
    border: 1px solid var(--border);
    content: '';
  }

  @keyframes artworkReveal {
    from {
      opacity: 0;
      clip-path: inset(12% 0 0);
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      clip-path: inset(0);
      transform: none;
    }
  }

  @media (max-width: 880px) {
    min-height: 360px;
  }

  @media (max-width: 560px) {
    min-height: 280px;
    background-size: 40px 40px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    clip-path: none;
  }
`;

export const NotFoundNumber = styled.span`
  color: var(--text);
  font-family: var(--serif);
  font-size: clamp(116px, 18vw, 210px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.075em;
  text-indent: -0.075em;
`;

export const NotFoundOrbit = styled.span`
  position: absolute;
  width: min(62%, 285px);
  aspect-ratio: 1;
  border: 1px solid var(--accent-border);
  border-radius: 50%;
  animation: orbit 18s linear infinite;

  &::before,
  &::after {
    position: absolute;
    background: var(--accent);
    content: '';
  }

  &::before {
    top: 50%;
    left: -20%;
    width: 140%;
    height: 1px;
  }

  &::after {
    top: -20%;
    left: 50%;
    width: 1px;
    height: 140%;
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const NotFoundMarker = styled.span`
  position: absolute;
  top: 8.5%;
  right: 17%;
  width: 11px;
  height: 11px;
  border: 3px solid var(--surface);
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
`;

export const NotFoundStatus = styled.span`
  position: absolute;
  right: 32px;
  bottom: 28px;
  padding: 7px 10px;
  border: 1px solid var(--border-strong);
  background: color-mix(in oklab, var(--surface) 86%, transparent);
  color: var(--text-3);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
`;
