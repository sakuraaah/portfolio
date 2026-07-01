import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const EyebrowRoot = styled.div<{
  $animated?: boolean;
  $centered?: boolean;
  $heroSpacing?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
  gap: 11px;
  margin-bottom: ${({ $heroSpacing }) => ($heroSpacing ? '30px' : '16px')};

  ${({ $animated }) =>
    $animated &&
    css`
      animation: ${fadeIn} 900ms both cubic-bezier(0.2, 0.65, 0.25, 1);
    `}
`;

export const EyebrowLine = styled.span`
  width: 26px;
  height: 1px;
  background: var(--accent);
`;

export const EyebrowText = styled.small`
  color: var(--text-3);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;
