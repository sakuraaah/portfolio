import type { ComponentPropsWithoutRef } from 'react';

export type ImageProps = Partial<
  Omit<ComponentPropsWithoutRef<'img'>, 'alt' | 'src'>
>;

export type Image = {
  src: string;
  alt: string;
  imageProps?: ImageProps;
};
