import styled from 'styled-components';

export type SocialLinkSize = 'lg' | 'sm';

export const SocialLinksRoot = styled.div<{ $size: SocialLinkSize }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $size }) => ($size === 'lg' ? 'center' : 'flex-start')};
  gap: ${({ $size }) => ($size === 'lg' ? '24px' : '20px')};
`;

export const SocialLink = styled.a<{ $size: SocialLinkSize }>`
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
