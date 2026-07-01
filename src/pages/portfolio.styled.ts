import { motion } from 'motion/react';
import styled from 'styled-components';

import {
  type AnimationPreset,
  CtaAnchor,
  PageWrap,
  animationStyles,
  headingStyles,
  pageWrapStyles,
  revealMotionProps,
} from '@/shared/styles';

export const HeroSection = styled(PageWrap)`
  padding-block: 80px 96px;

  @media (max-width: 880px) {
    padding-block: 40px 72px;
  }
`;

export const HeroGrid = styled.div`
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

export const HeroTitle = styled.h1`
  margin: 0 0 28px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 68px;
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.02em;

  em {
    color: var(--accent);
    font-style: italic;
  }

  @media (max-width: 880px) {
    font-size: 56px;
  }

  @media (max-width: 560px) {
    font-size: 44px;
  }
`;

export const HeroTitleLine = styled.span<{ $animation?: AnimationPreset }>`
  display: block;
  ${animationStyles}
`;

export const HeroCopy = styled.p<{ $animation?: AnimationPreset }>`
  max-width: 430px;
  margin: 0 0 38px;
  color: var(--text-2);
  font-size: 18.5px;
  line-height: 1.6;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 17px;
  }
`;

export const HeroActions = styled.div<{ $animation?: AnimationPreset }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  ${animationStyles}

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const AboutSectionRoot = styled.section`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
`;

export const AboutGrid = styled.div`
  ${pageWrapStyles}
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: start;
  gap: 64px;
  padding-block: 104px;

  h2 {
    ${headingStyles}
    margin: 0;
    font-size: 40px;
    line-height: 1.1;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-block: 80px;

    h2 {
      font-size: 34px;
    }
  }
`;

export const AboutHeading = styled(motion.div).attrs(revealMotionProps)``;

export const AboutCopy = styled(motion.div).attrs(revealMotionProps)`
  p {
    max-width: 520px;
    margin: 0;
    color: var(--text-2);
    font-size: 16.5px;
    line-height: 1.7;
  }
`;

export const AboutLede = styled.p`
  && {
    max-width: 760px;
    margin-bottom: 28px;
    color: var(--text);
    font-family: var(--serif);
    font-size: 28px;
    font-weight: 300;
    line-height: 1.45;
    letter-spacing: -0.01em;
  }

  @media (max-width: 880px) {
    && {
      font-size: 24px;
    }
  }
`;

export const ContactSectionRoot = styled(PageWrap)`
  padding-block: 120px;

  @media (max-width: 880px) {
    padding-block: 88px;
  }
`;

export const ContactCard = styled(motion.div).attrs(revealMotionProps)`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin: 0 0 24px;
    color: var(--text);
    font-family: var(--serif);
    font-size: 56px;
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: -0.02em;
  }

  em {
    color: var(--accent);
    font-style: italic;
  }

  p {
    margin: 0 0 40px;
    color: var(--text-2);
    font-size: 17px;
    line-height: 1.6;
  }

  @media (max-width: 880px) {
    h2 {
      font-size: 42px;
    }
  }
`;

export const EmailLink = styled(CtaAnchor)`
  margin-bottom: 44px;
  font-size: 30px;

  @media (max-width: 880px) {
    font-size: 24px;
  }
`;
