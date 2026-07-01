import { Group, Text } from '@mantine/core';
import styled from 'styled-components';

import { PageContainer, StyledLink } from '@/shared/ui';

export const FooterRoot = styled.footer`
  border-top: 1px solid var(--border);
`;

export const FooterInner = styled(PageContainer)`
  padding-block: 32px;
  color: var(--text-3);
  font-size: 13px;
`;

export const FooterGroup = styled(Group)`
  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FooterName = styled(Text)`
  color: var(--text-2);
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

export const BackToTopLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  svg {
    flex: none;
  }
`;
