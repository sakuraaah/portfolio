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
  const links = [
    {
      href: profile.github,
      icon: <IconBrandGithub aria-hidden="true" />,
      label: 'GitHub',
    },
    {
      href: profile.linkedin,
      icon: <IconBrandLinkedin aria-hidden="true" />,
      label: 'LinkedIn',
    },
    {
      href: profile.x,
      icon: <IconBrandX aria-hidden="true" />,
      label: 'X',
    },
  ].filter((link) => Boolean(link.href));

  if (!links.length) {
    return null;
  }

  return (
    <SocialLinksRoot $size={size}>
      {links.map((link) => (
        <SocialLink
          $size={size}
          aria-label={link.label}
          href={link.href}
          key={link.label}
        >
          {link.icon}
        </SocialLink>
      ))}
    </SocialLinksRoot>
  );
}
