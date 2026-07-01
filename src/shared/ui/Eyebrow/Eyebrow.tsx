import { EyebrowLine, EyebrowRoot, EyebrowText } from './Eyebrow.styled';

type EyebrowProps = {
  animated?: boolean;
  centered?: boolean;
  heroSpacing?: boolean;
  label: string;
};

export function Eyebrow({
  animated = false,
  centered = false,
  heroSpacing = false,
  label,
}: EyebrowProps) {
  return (
    <EyebrowRoot
      $animated={animated}
      $centered={centered}
      $heroSpacing={heroSpacing}
    >
      <EyebrowLine />
      <EyebrowText>{label}</EyebrowText>
      {centered && <EyebrowLine />}
    </EyebrowRoot>
  );
}
