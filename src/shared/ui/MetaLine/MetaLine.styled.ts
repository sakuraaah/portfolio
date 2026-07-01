import styled from 'styled-components';

export const MetaLineRoot = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px;
  border: 1px solid var(--accent-border);
  border-radius: 100px;
  color: var(--accent);
  background: var(--accent-subtle);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
`;

export const MetaDate = styled.span`
  color: var(--text-3);
  font-size: 13px;
`;
