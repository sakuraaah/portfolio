import {
  type AnimationPreset,
  ImagePanelContent,
  ImagePanelRoot,
  type ImagePanelVariant,
} from './ImagePanel.styled';

type ImagePanelProps = {
  animation?: AnimationPreset;
  label: string;
  variant: ImagePanelVariant;
};

export function ImagePanel({ animation, label, variant }: ImagePanelProps) {
  return (
    <ImagePanelRoot $animation={animation} $variant={variant}>
      <ImagePanelContent>
        <span>{label}</span>
      </ImagePanelContent>
    </ImagePanelRoot>
  );
}
