import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

import { profile } from '@/shared/constants';

import {
  SocialLink,
  type SocialLinkSize,
  SocialLinksRoot,
} from './SocialLinks.styled';

type SocialLinksProps = {
  size: SocialLinkSize;
};

export function SocialLinks({ size }: SocialLinksProps) {
  return (
    <SocialLinksRoot $size={size}>
      <SocialLink $size={size} href={profile.github} aria-label="GitHub">
        <IconBrandGithub aria-hidden="true" />
      </SocialLink>
      <SocialLink $size={size} href={profile.linkedin} aria-label="LinkedIn">
        <IconBrandLinkedin aria-hidden="true" />
      </SocialLink>
      <SocialLink $size={size} href={profile.x} aria-label="X">
        <IconBrandX aria-hidden="true" />
      </SocialLink>
    </SocialLinksRoot>
  );
}
