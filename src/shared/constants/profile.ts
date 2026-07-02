import type { Profile } from '@/entities/profile';

import heroImageSrc from '@/assets/hero.jpg';

export const profile: Profile = {
  name: 'Nikita Trofimov',
  role: 'Full-stack engineer',
  email: 'ntrofimov@ntrofimov.dev',
  heroImage: {
    src: heroImageSrc,
    alt: 'Abstract hero image',
  },
  github: 'https://github.com/sakuraaah',
  linkedin: 'https://www.linkedin.com/in/ntrofimovv/',
};
