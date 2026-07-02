import type { ReactElement } from 'react';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

import {
  SocialLink,
  type SocialLinkSize,
  SocialLinksRoot,
} from './SocialLinks.styled';

type SocialLinksValue = {
  github?: string;
  linkedin?: string;
  x?: string;
};

type SocialLinkItem = {
  href?: string;
  icon: ReactElement;
  label: string;
};

type VisibleSocialLinkItem = SocialLinkItem & {
  href: string;
};

type SocialLinksProps = {
  links: SocialLinksValue;
  size: SocialLinkSize;
};

function isVisibleSocialLink(
  link: SocialLinkItem
): link is VisibleSocialLinkItem {
  return Boolean(link.href);
}

export function SocialLinks({ links, size }: SocialLinksProps) {
  const visibleLinks = [
    {
      href: links.github,
      icon: <IconBrandGithub aria-hidden="true" />,
      label: 'GitHub',
    },
    {
      href: links.linkedin,
      icon: <IconBrandLinkedin aria-hidden="true" />,
      label: 'LinkedIn',
    },
    {
      href: links.x,
      icon: <IconBrandX aria-hidden="true" />,
      label: 'X',
    },
  ].filter(isVisibleSocialLink);

  if (!visibleLinks.length) {
    return null;
  }

  return (
    <SocialLinksRoot $size={size}>
      {visibleLinks.map((link) => (
        <SocialLink
          $size={size}
          aria-label={link.label}
          href={link.href}
          key={link.label}
          rel="noreferrer"
          target="_blank"
        >
          {link.icon}
        </SocialLink>
      ))}
    </SocialLinksRoot>
  );
}
