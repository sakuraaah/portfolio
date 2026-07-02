import { type Image } from '@/shared/types';

import {
  type AnimationPreset,
  ImagePanelImage,
  ImagePanelRoot,
  type ImagePanelVariant,
} from './ImagePanel.styled';

type ImagePanelProps = {
  animation?: AnimationPreset;
  image: Image;
  variant: ImagePanelVariant;
};

export function ImagePanel({ animation, image, variant }: ImagePanelProps) {
  return (
    <ImagePanelRoot $animation={animation} $variant={variant}>
      <ImagePanelImage alt={image.alt} src={image.src} />
    </ImagePanelRoot>
  );
}
