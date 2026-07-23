import type { Project } from '@/entities/project';

import ruslanGalleryImage1Src from '@/assets/ruslan-gallery-1.jpg';
import ruslanGalleryImage2Src from '@/assets/ruslan-gallery-2.jpg';
import ruslanGalleryImage3Src from '@/assets/ruslan-gallery-3.jpg';
import ruslanGalleryImage4Src from '@/assets/ruslan-gallery-4.jpg';
import ruslanMainImageSrc from '@/assets/ruslan-main.jpg';
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
  {
    id: 'puslan-runtus',
    year: '2002',
    stack: ['Именно', 'Цинус', 'Вайб'],
    mainImage: {
      src: ruslanMainImageSrc,
      alt: 'Руслан с друзьями',
      imageProps: {
        style: {
          objectFit: 'contain',
        },
      },
    },
    galleryImages: [
      {
        src: ruslanGalleryImage1Src,
        alt: 'Руслан косплеит идола',
      },
      {
        src: ruslanGalleryImage2Src,
        alt: 'Руслан и спорт',
      },
      {
        src: ruslanGalleryImage3Src,
        alt: 'Руслан и пицца',
      },
      {
        src: ruslanGalleryImage4Src,
        alt: 'Тики тики тики (Руслан)',
        imageProps: {
          style: {
            objectFit: 'contain',
          },
        },
      },
    ],
  },
];
