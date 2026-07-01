import { IconArrowUp } from '@tabler/icons-react';

import {
  BackToTopLink,
  FooterGroup,
  FooterInner,
  FooterName,
  FooterRoot,
} from './Footer.styled';

type FooterProps = {
  profileName: string;
};

export function Footer({ profileName }: FooterProps) {
  return (
    <FooterRoot>
      <FooterInner fluid>
        <FooterGroup justify="space-between" gap={20} wrap="wrap">
          <FooterName component="span">{profileName}</FooterName>
          <span>&copy; 2026, Built and maintained by hand.</span>
          <BackToTopLink href="#top">
            Back to top
            <IconArrowUp aria-hidden="true" size={14} stroke={1.8} />
          </BackToTopLink>
        </FooterGroup>
      </FooterInner>
    </FooterRoot>
  );
}
