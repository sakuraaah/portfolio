import { Container } from '@mantine/core';
import styled from 'styled-components';

export const PageContainer = styled(Container)`
  width: 100%;
  max-width: 1180px;
  padding-inline: 40px;

  @media (max-width: 880px) {
    padding-inline: 24px;
  }
`;
