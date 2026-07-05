import { Flex, Group, Stack } from '@mantine/core';
import styled from 'styled-components';

import { IconCircleButton } from '@/shared/ui';

export const DrawerContent = styled(Stack)`
  min-height: 100%;
  gap: 0;
`;

export const DrawerHeader = styled(Flex)`
  gap: 16px;
  padding: 21px 22px 20px;
  border-bottom: 1px solid var(--border);
`;

export const DrawerBrand = styled.span`
  color: var(--text);
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 500;
`;

export const DrawerCloseButton = styled(IconCircleButton)`
  width: 40px;
  height: 40px;
`;

export const DrawerLinks = styled(Stack)`
  gap: 2px;
  padding: 14px 10px;
`;

export const DrawerLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border-radius: 8px;
  color: var(--text);
  font-family: var(--serif);
  font-size: 23px;
  text-decoration: none;
  transition:
    background 200ms ease,
    color 200ms ease;

  &:hover,
  &:focus-visible {
    color: var(--accent);
    background: var(--surface-2);
  }

  .cta-arrow {
    width: 20px;
    height: 20px;
    color: var(--text-3);
  }
`;

export const DrawerFooter = styled.div`
  padding: 22px 22px 26px;
  margin-top: auto;
  border-top: 1px solid var(--border);
`;

export const DrawerAppearance = styled(Flex)`
  gap: 16px;
  margin-bottom: 16px;

  span {
    color: var(--text-2);
    font-size: 14.5px;
    font-weight: 500;
  }

  strong {
    color: var(--accent);
    font-family: var(--serif);
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
  }
`;

export const ThemeDotGroup = styled(Group)`
  gap: 14px;
`;

export const ThemeDotButton = styled(IconCircleButton)`
  width: 48px;
  height: 48px;
  min-width: 48px;
  font-size: 17px;
  line-height: 1;
  transition:
    transform 300ms cubic-bezier(0.2, 0.65, 0.25, 1),
    background 250ms ease,
    border-color 250ms ease,
    color 250ms ease,
    box-shadow 250ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }
`;
