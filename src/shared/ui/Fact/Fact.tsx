import { FactLabel, FactValue } from './Fact.styled';

type FactProps = {
  label: string;
  value: string;
};

export function Fact({ label, value }: FactProps) {
  return (
    <div>
      <FactLabel>{label}</FactLabel>
      <FactValue>{value}</FactValue>
    </div>
  );
}
