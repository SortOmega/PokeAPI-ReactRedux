import styled, { css } from 'styled-components';

type PokeButtonProps = {
  inPairs?: boolean;
};

export const PokeButton = styled.button<PokeButtonProps>`
  --rad: 12px;
  background: var(--PokeTurquoiseD);
  color: var(--PokeWhite);
  width: 115px;
  height: 45px;
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
    background: var(--PokeTurquoise);
    color: var(--PokeGrayWhite);
  }

  ${(props) => css`
    ${!props.inPairs
      ? css`
          border-radius: var(--rad);
        `
      : css`
          &:nth-child(odd) {
            border-radius: var(--rad) 0 0 var(--rad);
          }

          &:nth-child(even) {
            border-radius: 0 var(--rad) var(--rad) 0;
          }
        `}
  `}
`;
