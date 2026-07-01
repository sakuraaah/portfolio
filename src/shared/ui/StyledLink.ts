import styled from 'styled-components';

export const StyledLink = styled.a`
  position: relative;
  color: var(--text-2);
  font-size: 14.5px;
  font-weight: 500;
  text-decoration: none;
  transition: color 250ms ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 300ms cubic-bezier(0.2, 0.65, 0.25, 1);
  }

  &:hover {
    color: var(--text);
  }

  &:hover::after {
    width: 100%;
  }
`;
