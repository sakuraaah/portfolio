import type { ComponentType, PropsWithChildren } from 'react';

import { Text, Title } from '@mantine/core';
import { motion } from 'motion/react';
import styled from 'styled-components';

import { CtaAnchor, PageWrap, revealMotionProps } from '@/shared/styles';

type StyledMantineProps = PropsWithChildren<Record<string, unknown>>;

const StyledText = Text as unknown as ComponentType<StyledMantineProps>;
const StyledTitle = Title as unknown as ComponentType<StyledMantineProps>;

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
`;

export const ContactTitle = styled(StyledTitle).attrs({ order: 2 })`
  margin: 0 0 24px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 56px;
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.02em;

  em {
    color: var(--accent);
    font-style: italic;
  }

  @media (max-width: 880px) {
    font-size: 42px;
  }
`;

export const ContactCopy = styled(StyledText)`
  margin: 0 0 40px;
  color: var(--text-2);
  font-size: 17px;
  line-height: 1.6;
`;

export const EmailLink = styled(CtaAnchor)`
  margin-bottom: 44px;
  font-size: 30px;

  @media (max-width: 880px) {
    font-size: 24px;
  }
`;
