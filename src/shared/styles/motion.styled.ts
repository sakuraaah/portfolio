import { type HTMLMotionProps } from 'motion/react';
import { css, keyframes } from 'styled-components';

export type AnimationPreset =
  'fade' | 'fadeDelay' | 'image' | 'rise1' | 'rise2' | 'rise3' | 'rise4';

export const revealMotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12, margin: '0px 0px -8% 0px' },
  transition: { duration: 1, ease: [0.2, 0.65, 0.25, 1] },
} satisfies HTMLMotionProps<'div'>;

export const revealHoverMotionProps = {
  ...revealMotionProps,
  whileHover: { y: -2 },
} satisfies HTMLMotionProps<'article'>;

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

export const animationStyles = css<{ $animation?: AnimationPreset }>`
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
