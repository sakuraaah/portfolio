import { Box } from '@mantine/core';

import { SkeletonBlock } from './PageSkeleton.styled';

export function PageSkeleton() {
  return (
    <Box
      component="main"
      aria-busy="true"
      aria-label="Loading page"
      maw={1180}
      mih="70vh"
      mx="auto"
      px={{ base: 24, sm: 40 }}
      py={{ base: 56, sm: 96 }}
    >
      <SkeletonBlock animate height={360} radius="md" />
    </Box>
  );
}
