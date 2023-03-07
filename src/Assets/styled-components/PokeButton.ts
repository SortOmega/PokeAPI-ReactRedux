import styled from 'styled-components';

export const PokeButton = styled.button`
  --rad: 12px;
  background: var(--PokeBlue);
  color: var(--PokeWhite);
  width: 115px;
  height: 55px;
  padding: 6px;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  border: 2px outset var(--PokeGrayD);
  transition: border 0.1s, background 0.1s;

  &:active {
    border: 2px inset var(--PokeGrayD);
    background: var(--PokeBlueL);
    color: var(--PokeGrayWhite);
  }

  &:nth-child(odd) {
    border-radius: var(--rad) 0 0 var(--rad);
  }

  &:nth-child(even) {
    border-radius: 0 var(--rad) var(--rad) 0;
  }
`;
