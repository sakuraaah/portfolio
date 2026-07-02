import { type Image } from '@/shared/types';

export type Project = {
  id: string;
  year: string;
  stack: string[];
  mainImage: Image;
  galleryImages: Image[];
  latest?: boolean;
  github?: string;
  link?: string;
};
