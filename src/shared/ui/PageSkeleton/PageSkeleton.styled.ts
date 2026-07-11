import { Skeleton } from '@mantine/core';
import styled from 'styled-components';

export const SkeletonBlock = styled(Skeleton)`
  &&&::before {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  &&&::after {
    background-color: color-mix(in srgb, currentColor 14%, transparent);
  }
`;
