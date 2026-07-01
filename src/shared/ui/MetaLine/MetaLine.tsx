import {
  MetaDate,
  MetaLineRoot,
  StatusDot,
  StatusPill,
} from './MetaLine.styled';

type MetaLineProps = {
  status?: string;
  type: string;
  year: string;
};

export function MetaLine({
  status = 'Latest project',
  type,
  year,
}: MetaLineProps) {
  return (
    <MetaLineRoot>
      <StatusPill>
        <StatusDot aria-hidden="true" />
        {status}
      </StatusPill>
      <MetaDate>
        {year} &middot; {type}
      </MetaDate>
    </MetaLineRoot>
  );
}
