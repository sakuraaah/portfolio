import { type Image } from '@/shared/types';

export type Profile = {
  name: string;
  role: string;
  email: string;
  heroImage: Image;
  github?: string;
  linkedin?: string;
  x?: string;
};
