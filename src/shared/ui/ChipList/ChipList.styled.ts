import styled, { css } from 'styled-components';

export const Chips = styled.div<{ $withFeatureSpacing?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  ${({ $withFeatureSpacing }) =>
    $withFeatureSpacing &&
    css`
      margin-bottom: 36px;
    `}
`;

export const Chip = styled.span`
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-2);
  background: var(--surface-2);
  font-size: 12.5px;
  font-weight: 500;
`;
