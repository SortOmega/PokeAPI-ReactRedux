import styled, { css } from 'styled-components';
import { PokemonType } from '../Types/Pokemon';

type PokeTypeLabel = {
  children?: PokemonType;
};

export const PokeTypeLabel = styled.span<PokeTypeLabel>`
  display: flex;
  align-items: center;
  border-radius: 14px/50%;
  height: 24px;
  width: max-content;
  padding: 14px 5px;
  text-transform: capitalize;
  font-weight: bold;

  color: var(--PokeGrayWhite);
  text-shadow: 0px 0px 2px var(--PokeDark), 0px -0px 4px var(--PokeDark);
  ${({ children }) => css`
    background: var(--PokeType-${children});
    border: 2px groove var(--PokeType-${children});
  `};
`;

/*${children === 'electric' || children === 'ground' || children === 'bug' || children === 'grass'
      ? css`
          color: var(--PokeGrayD);
        `
      : css`
          color: var(--PokeWhite);
        `}//*/
