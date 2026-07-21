import { Box, Group, Stack } from '@mantine/core';

import { SkeletonBlock } from '@/shared/ui/SkeletonBlock';

export function ProjectSkeleton() {
  return (
    <Box
      component="main"
      aria-busy="true"
      aria-label="Loading page"
      maw={1180}
      mih="70vh"
      mx="auto"
      px={{ base: 24, sm: 40 }}
      py={{ base: 40, sm: 56 }}
    >
      <Stack gap="clamp(48px, 5vw, 56px)">
        <Stack align="flex-start" gap={20}>
          <SkeletonBlock h={16} w={132} mb={16} />
          <SkeletonBlock h={26} w={190} radius="xl" />
          <Stack gap={10} w="100%">
            <SkeletonBlock h={{ base: 44, sm: 72 }} w={{ base: '100%', sm: '72%' }} />
            <SkeletonBlock h={{ base: 44, sm: 72 }} w={{ base: '72%', sm: '48%' }} />
          </Stack>
          <Stack gap={10} maw={620} mt={4} w="100%">
            <SkeletonBlock h={18} />
            <SkeletonBlock h={18} w="88%" />
          </Stack>
          <Group gap={28} mt={10}>
            <SkeletonBlock h={42} w={154} radius="xl" />
            <SkeletonBlock h={18} w={104} />
          </Group>
        </Stack>
        <SkeletonBlock
          w="100%"
          radius="md"
          style={{ aspectRatio: '16 / 9' }}
        />
      </Stack>
    </Box>
  );
}
