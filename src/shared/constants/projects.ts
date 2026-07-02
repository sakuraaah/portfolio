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
    title: 'Project Name',
    year: '2026',
    role: 'Design & engineering',
    type: 'Full-stack build',
    description:
      'A short, confident description of what this product does, the problem it solves, and what makes the build worth showing. Swap this for the real story.',
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
    overview: [
      "Open with the context: what this product is, who it's for, and the problem that made it worth building. Keep it human: a paragraph or two is plenty.",
      'Then say what you actually did: the parts you designed, the systems you built, and the tradeoffs you made along the way. This is the story the project card on the home page only hints at.',
    ],
    highlights: [
      'A standout feature or technical decision worth calling out.',
      "A measurable outcome, or something you're proud of in the build.",
      'A detail that shows the care that went into it.',
    ],
    github: 'https://github.com/sakuraaah/gravity-rift',
  },
];
