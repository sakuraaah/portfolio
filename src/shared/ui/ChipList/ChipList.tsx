import { Chip, Chips } from './ChipList.styled';

type ChipListProps = {
  items: string[];
  withFeatureSpacing?: boolean;
};

export function ChipList({ items, withFeatureSpacing = false }: ChipListProps) {
  return (
    <Chips $withFeatureSpacing={withFeatureSpacing}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </Chips>
  );
}
