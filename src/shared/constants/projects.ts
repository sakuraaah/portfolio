import type { Project } from '@/entities/project';

import testprojGalleryImage1Src from '@/assets/testproj-gallery-1.jpg';
import testprojGalleryImage2Src from '@/assets/testproj-gallery-2.jpg';
import testprojGalleryImage3Src from '@/assets/testproj-gallery-3.jpg';
import testprojGalleryImage4Src from '@/assets/testproj-gallery-4.jpg';
import testprojMainImageSrc from '@/assets/testproj-main.jpg';

export const projects: Project[] = [
  {
    id: 'project-name',
    latest: true,
    year: '2026',
    stack: ['React', 'TypeScript', 'Node', 'Postgres'],
    mainImage: {
      src: testprojMainImageSrc,
      alt: 'Test project main image with screen',
    },
    galleryImages: [
      {
        src: testprojGalleryImage1Src,
        alt: 'Test project gallery 1st image (TODO actual description)',
      },
      {
        src: testprojGalleryImage2Src,
        alt: 'Test project gallery 2nd image (TODO actual description)',
      },
      {
        src: testprojGalleryImage3Src,
        alt: 'Test project gallery 3rd image (TODO actual description)',
      },
      {
        src: testprojGalleryImage4Src,
        alt: 'Test project gallery 4th image (TODO actual description)',
      },
    ],
    github: 'https://github.com/sakuraaah/gravity-rift',
  },
];
