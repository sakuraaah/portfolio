import { Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconCircleButton, PageContainer, StyledLink } from '@/shared/ui';

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  background: color-mix(in oklab, var(--bg) 78%, transparent);
  backdrop-filter: saturate(1.2) blur(10px);
`;

export const HeaderInner = styled(PageContainer)`
  min-height: 74px;

  @media (max-width: 560px) {
    min-height: 66px;
  }
`;

export const HeaderGroup = styled(Group)`
  min-height: inherit;
`;

export const BrandLink = styled(Link)`
  color: var(--text);
  font-family: var(--serif);
  font-size: 21px;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 560px) {
    font-size: 19px;
  }
`;

export const HeaderNav = styled(Group)`
  gap: 36px;

  @media (max-width: 880px) {
    display: none;
  }
`;

export const HeaderNavLink = styled(StyledLink)``;

export const ThemePillButton = styled(Button)`
  gap: 8px;
  inline-size: 100px;
  flex: 0 0 100px;
  height: 38px;
  padding: 0 15px 0 13px;
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text-2);
  background: transparent;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 500;
  --button-hover: transparent;
  transition:
    border-color 250ms ease,
    color 250ms ease;

  &:hover,
  &:focus-visible {
    color: var(--accent);
    border-color: var(--accent);
  }

  .mantine-Button-inner {
    gap: 8px;
  }

  .mantine-Button-section {
    font-size: 15px;
    line-height: 1;
  }
`;

export const MenuButton = styled(IconCircleButton)`
  display: none;
  width: 42px;
  height: 42px;

  @media (max-width: 880px) {
    display: inline-flex;
  }
`;
