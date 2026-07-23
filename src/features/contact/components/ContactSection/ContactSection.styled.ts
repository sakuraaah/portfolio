import { motion } from 'motion/react';
import styled from 'styled-components';

import { PageWrap, revealMotionProps } from '@/shared/styles';
import { CtaAnchor, DisplayTitle, LeadText } from '@/shared/ui';

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

export const ContactTitle = styled(DisplayTitle).attrs({ order: 2 })`
  margin: 0 0 24px;
  font-size: 56px;

  @media (max-width: 880px) {
    font-size: 42px;
  }
`;

export const ContactCopy = styled(LeadText)`
  max-width: none;
  margin: 0 0 40px;
  font-size: 17px;
`;

export const EmailLink = styled(CtaAnchor)`
  margin-bottom: 44px;
  font-size: 30px;

  @media (max-width: 880px) {
    font-size: 24px;
  }
`;
