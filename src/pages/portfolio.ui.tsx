import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

import { type Project } from '@/entities/project';

import { profile } from '@/shared/constants';

import {
  Chip,
  Chips,
  EyebrowLine,
  EyebrowRoot,
  EyebrowText,
  FactLabel,
  FactValue,
  ImagePanelContent,
  ImagePanelRoot,
  MetaDate,
  MetaLineRoot,
  SocialLink,
  SocialLinksRoot,
  StatusDot,
  StatusPill,
} from './portfolio.styled';

export function Eyebrow({
  label,
  animated = false,
  centered = false,
}: {
  label: string;
  animated?: boolean;
  centered?: boolean;
}) {
  return (
    <EyebrowRoot $animated={animated} $centered={centered}>
      <EyebrowLine />
      <EyebrowText>{label}</EyebrowText>
      {centered && <EyebrowLine />}
    </EyebrowRoot>
  );
}

export function MetaLine({ project }: { project: Project }) {
  return (
    <MetaLineRoot>
      <StatusPill>
        <StatusDot aria-hidden="true" />
        Latest project
      </StatusPill>
      <MetaDate>
        {project.year} &middot; {project.type}
      </MetaDate>
    </MetaLineRoot>
  );
}

export function ChipList({ items }: { items: string[] }) {
  return (
    <Chips>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </Chips>
  );
}

export function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <FactLabel>{label}</FactLabel>
      <FactValue>{value}</FactValue>
    </div>
  );
}

export function ImagePanel({
  animation,
  label,
  variant,
}: {
  animation?:
    'fade' | 'fadeDelay' | 'image' | 'rise1' | 'rise2' | 'rise3' | 'rise4';
  label: string;
  variant: 'portrait' | 'screen' | 'wide' | 'gallery';
}) {
  return (
    <ImagePanelRoot $animation={animation} $variant={variant}>
      <ImagePanelContent>
        <span>{label}</span>
      </ImagePanelContent>
    </ImagePanelRoot>
  );
}

export function SocialLinks({ size }: { size: 'sm' | 'lg' }) {
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
