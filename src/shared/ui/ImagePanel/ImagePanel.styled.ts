import styled, { css, keyframes } from 'styled-components';

export type AnimationPreset =
  'fade' | 'fadeDelay' | 'image' | 'rise1' | 'rise2' | 'rise3' | 'rise4';

export type ImagePanelVariant = 'gallery' | 'portrait' | 'screen' | 'wide';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const imageReveal = keyframes`
  from {
    opacity: 0;
    clip-path: inset(14% 0 0 0);
    transform: scale(1.05);
  }

  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    transform: scale(1);
  }
`;

const animationStyles = css<{ $animation?: AnimationPreset }>`
  ${({ $animation }) => {
    if (!$animation) return '';

    const base = css`
      animation-duration: 900ms;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.2, 0.65, 0.25, 1);
    `;

    switch ($animation) {
      case 'fade':
        return css`
          ${base}
          animation-name: ${fadeIn};
        `;
      case 'fadeDelay':
        return css`
          animation: ${fadeIn} 800ms 100ms both;
        `;
      case 'image':
        return css`
          animation: ${imageReveal} 1200ms 220ms both
            cubic-bezier(0.2, 0.65, 0.25, 1);
        `;
      case 'rise1':
        return css`
          ${base}
          animation-name: ${riseIn};
          animation-delay: 120ms;
        `;
      case 'rise2':
        return css`
          ${base}
          animation-name: ${riseIn};
          animation-delay: 240ms;
        `;
      case 'rise3':
        return css`
          ${base}
          animation-name: ${riseIn};
          animation-delay: 400ms;
        `;
      case 'rise4':
        return css`
          ${base}
          animation-name: ${riseIn};
          animation-delay: 540ms;
        `;
      default:
        return '';
    }
  }}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    clip-path: none !important;
    transform: none !important;
  }
`;

export const ImagePanelRoot = styled.div<{
  $animation?: AnimationPreset;
  $variant: ImagePanelVariant;
}>`
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    color-mix(in oklab, var(--accent-subtle) 64%, var(--surface)) 0%,
    var(--surface-2) 100%
  );
  box-shadow: var(--sh-md);
  ${animationStyles}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 36px 36px;
    opacity: 0.32;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 18px;
    border: 1px dashed color-mix(in oklab, var(--text-3) 38%, transparent);
    border-radius: inherit;
  }

  ${({ $variant }) =>
    $variant === 'portrait' &&
    css`
      width: 100%;
      aspect-ratio: 4 / 5;
      max-height: 600px;
      box-shadow: var(--sh-lg);

      @media (max-width: 880px) {
        order: -1;
        max-height: 380px;
      }
    `}

  ${({ $variant }) =>
    $variant === 'screen' &&
    css`
      min-height: 440px;
      border: 0;
      border-right: 1px solid var(--border);
      border-radius: 0;
      box-shadow: none;

      @media (max-width: 880px) {
        min-height: 300px;
        border-right: 0;
        border-bottom: 1px solid var(--border);
      }
    `}

  ${({ $variant }) =>
    $variant === 'wide' &&
    css`
      width: 100%;
      aspect-ratio: 16 / 9;
      box-shadow: var(--sh-lg);

      @media (max-width: 560px) {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }
    `}

  ${({ $variant }) =>
    $variant === 'gallery' &&
    css`
      aspect-ratio: 4 / 3;
    `}
`;

export const ImagePanelContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  span {
    z-index: 1;
    padding: 8px 13px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: color-mix(in oklab, var(--surface) 82%, transparent);
    color: var(--text-3);
    font-size: 13px;
    font-weight: 500;
  }
`;
