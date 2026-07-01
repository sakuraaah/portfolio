import { Box } from '@mantine/core';
import styled from 'styled-components';

export const SiteRoot = styled(Box)`
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  transition:
    background 400ms ease,
    color 400ms ease;
`;
