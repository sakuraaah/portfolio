import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

type AnimationPreset =
  'fade' | 'fadeDelay' | 'image' | 'rise1' | 'rise2' | 'rise3' | 'rise4';

type CtaProps = {
  $animation?: AnimationPreset;
  $muted?: boolean;
  $plain?: boolean;
  $soft?: boolean;
};

type ImagePanelVariant = 'gallery' | 'portrait' | 'screen' | 'wide';

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

const pageWrapStyles = css`
  width: 100%;
  max-width: 1180px;
  padding-inline: 40px;
  margin: 0 auto;

  @media (max-width: 880px) {
    padding-inline: 24px;
  }
`;

const headingStyles = css`
  color: var(--text);
  font-family: var(--serif);
  font-weight: 400;
  letter-spacing: -0.02em;
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

const revealStyles = css`
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 1000ms cubic-bezier(0.2, 0.65, 0.25, 1),
    transform 1000ms cubic-bezier(0.2, 0.65, 0.25, 1);

  &.in {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
`;

export const PageWrap = styled.section`
  ${pageWrapStyles}
`;

export const NavRouterLink = styled(Link)`
  position: relative;
  color: var(--text);
  text-decoration: none;
  transition: color 250ms ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 300ms cubic-bezier(0.2, 0.65, 0.25, 1);
  }

  &:hover {
    color: var(--text);
  }

  &:hover::after {
    width: 100%;
  }
`;

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

export const EyebrowRoot = styled.div<{
  $animated?: boolean;
  $centered?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
  gap: 11px;
  margin-bottom: 16px;

  ${HeroSection} & {
    margin-bottom: 30px;
  }

  ${({ $animated }) =>
    $animated &&
    css`
      animation: ${fadeIn} 900ms both cubic-bezier(0.2, 0.65, 0.25, 1);
    `}
`;

export const EyebrowLine = styled.span`
  width: 26px;
  height: 1px;
  background: var(--accent);
`;

export const EyebrowText = styled.small`
  color: var(--text-3);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
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

export const WorkSectionRoot = styled(PageWrap)`
  padding-block: 40px 120px;

  @media (max-width: 880px) {
    padding-bottom: 88px;
  }
`;

export const SectionHeading = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
  margin-bottom: 56px;
  border-bottom: 1px solid var(--border);

  h2 {
    ${headingStyles}
    margin: 0;
    font-size: 42px;
    line-height: 1.1;
  }

  p {
    max-width: 280px;
    margin: 0;
    color: var(--text-3);
    font-size: 14.5px;
    line-height: 1.6;
    text-align: right;
  }

  @media (max-width: 880px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 40px;

    h2 {
      font-size: 34px;
    }

    p {
      max-width: 100%;
      text-align: left;
    }
  }
`;

export const Feature = styled.article.attrs({ className: 'reveal' })`
  ${revealStyles}
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--sh-md);
  transition:
    opacity 1000ms cubic-bezier(0.2, 0.65, 0.25, 1),
    transform 1000ms cubic-bezier(0.2, 0.65, 0.25, 1),
    box-shadow 400ms cubic-bezier(0.2, 0.65, 0.25, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--sh-lg);
  }

  &.in:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 48px 44px;

  > p {
    margin: 0 0 28px;
    color: var(--text-2);
    font-size: 16px;
    line-height: 1.65;
  }

  @media (max-width: 880px) {
    padding: 36px 28px;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0 0 16px;
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.02em;

  @media (max-width: 560px) {
    font-size: 30px;
  }
`;

export const FeatureActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: auto;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SourceLink = styled.a`
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

export const NextRow = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  padding: 24px 28px;
  border: 1px dashed var(--border-strong);
  border-radius: 8px;
  color: var(--text-3);

  p {
    margin: 0;
    font-size: 14.5px;
    line-height: 1.55;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    padding: 20px;
  }
`;

export const DotGroup = styled.span`
  display: flex;
  gap: 5px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--text-3);
  }

  span:nth-child(1) {
    opacity: 0.5;
  }

  span:nth-child(2) {
    opacity: 0.35;
  }

  span:nth-child(3) {
    opacity: 0.2;
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

export const AboutHeading = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}
`;

export const AboutCopy = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}

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

export const ContactCard = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}
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

export const ProjectHero = styled(PageWrap)`
  padding-block: 56px 48px;

  > ${CtaRouterLink} {
    margin-bottom: 36px;
  }

  @media (max-width: 560px) {
    padding-top: 40px;
  }
`;

export const ProjectMeta = styled.div<{ $animation?: AnimationPreset }>`
  margin-bottom: 20px;
  ${animationStyles}
`;

export const ProjectTitle = styled.h1<{ $animation?: AnimationPreset }>`
  max-width: 14ch;
  margin: 0 0 24px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 76px;
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.025em;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 58px;
  }

  @media (max-width: 560px) {
    font-size: 44px;
  }
`;

export const ProjectDescription = styled.p<{ $animation?: AnimationPreset }>`
  max-width: 620px;
  margin: 0 0 36px;
  color: var(--text-2);
  font-size: 22px;
  line-height: 1.55;
  ${animationStyles}

  @media (max-width: 880px) {
    font-size: 19px;
  }
`;

export const ProjectActions = styled.div<{ $animation?: AnimationPreset }>`
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

export const ProjectShotSection = styled(PageWrap)`
  padding-block: 8px;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const ProjectBodySection = styled(PageWrap)`
  padding-block: 80px;
`;

export const ProjectBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: start;
  gap: 72px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const Facts = styled.aside.attrs({ className: 'reveal' })`
  ${revealStyles}
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 920px) {
    position: static;
  }
`;

export const FactLabel = styled.div`
  margin-bottom: 8px;
  color: var(--text-3);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const FactValue = styled.div`
  color: var(--text);
  font-size: 16px;
`;

export const FactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
`;

export const Writeup = styled.div`
  max-width: 680px;
`;

export const WriteupArticle = styled.article.attrs({ className: 'reveal' })`
  ${revealStyles}

  h2 {
    ${headingStyles}
    margin: 0 0 18px;
    font-size: 28px;
  }

  p {
    margin: 0 0 20px;
    color: var(--text-2);
    font-size: 17.5px;
    line-height: 1.75;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const HighlightBlock = styled(WriteupArticle)`
  margin-top: 48px;
`;

export const HighlightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    color: var(--text-2);
    font-size: 16.5px;
    line-height: 1.6;
  }

  li span {
    flex: none;
    width: 6px;
    height: 6px;
    margin-top: 9px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

export const Gallery = styled.div.attrs({ className: 'reveal' })`
  ${revealStyles}
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 56px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const MoreSection = styled.section`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
`;

export const MoreInner = styled.div.attrs({ className: 'reveal' })`
  ${pageWrapStyles}
  ${revealStyles}
  padding-block: 80px;
  text-align: center;

  h2 {
    ${headingStyles}
    margin: 0 0 28px;
    font-size: 40px;
  }

  @media (max-width: 880px) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const MoreActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const MetaLineRoot = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px;
  border: 1px solid var(--accent-border);
  border-radius: 100px;
  color: var(--accent);
  background: var(--accent-subtle);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
`;

export const MetaDate = styled.span`
  color: var(--text-3);
  font-size: 13px;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  ${Feature} & {
    margin-bottom: 36px;
  }
`;

export const Chip = styled.span`
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-2);
  background: var(--surface-2);
  font-size: 12.5px;
  font-weight: 500;
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

export const SocialLinksRoot = styled.div<{ $size: 'lg' | 'sm' }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $size }) => ($size === 'lg' ? 'center' : 'flex-start')};
  gap: ${({ $size }) => ($size === 'lg' ? '24px' : '20px')};
`;

export const SocialLink = styled.a<{ $size: 'lg' | 'sm' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-3);
  text-decoration: none;
  transition: color 250ms ease;

  svg {
    width: ${({ $size }) => ($size === 'lg' ? '21px' : '19px')};
    height: ${({ $size }) => ($size === 'lg' ? '21px' : '19px')};
  }

  &:hover,
  &:focus-visible {
    color: var(--text);
  }
`;
