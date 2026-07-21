import { Box, Group, SimpleGrid, Stack } from '@mantine/core';

import { SkeletonBlock } from '@/shared/ui/SkeletonBlock';

export function HomeSkeleton() {
  return (
    <Box
      component="main"
      aria-busy="true"
      aria-label="Loading page"
      maw={1180}
      mih="70vh"
      mx="auto"
      px={{ base: 24, sm: 40 }}
      py={{ base: 48, sm: 80 }}
    >
      <Stack gap={64}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 36, sm: 64 }}>
          <Stack gap={18} justify="center">
            <SkeletonBlock h={12} w="30%" />
            <SkeletonBlock h={64} w="94%" />
            <SkeletonBlock h={64} w="72%" />
            <Stack gap={10} mt={10}>
              <SkeletonBlock h={16} />
              <SkeletonBlock h={16} w="84%" />
            </Stack>
            <Group gap={16} mt={18}>
              <SkeletonBlock h={42} w={148} radius="xl" />
              <SkeletonBlock h={42} w={42} circle />
              <SkeletonBlock h={42} w={42} circle />
            </Group>
          </Stack>
          <SkeletonBlock h={{ base: 300, sm: 480 }} radius="md" />
        </SimpleGrid>
        <Stack gap={24}>
          <SkeletonBlock h={38} w={{ base: '58%', sm: '32%' }} />
          <SkeletonBlock h={{ base: 320, sm: 420 }} radius="md" />
        </Stack>
      </Stack>
    </Box>
  );
}
