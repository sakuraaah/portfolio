import { type Image } from '@/shared/types';

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  type: string;
  description: string;
  stack: string[];
  mainImage: Image;
  galleryImages: Image[];
  overview?: string[];
  highlights?: string[];
  latest?: boolean;
  github?: string;
  link?: string;
};
