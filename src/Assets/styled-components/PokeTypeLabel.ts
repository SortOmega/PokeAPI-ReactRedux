import styled from 'styled-components';
import { PokemonType } from '../Types/Pokemon';

type PokeTypeLabel = {
  children?: PokemonType;
};

export const PokeTypeLabel = styled.span<PokeTypeLabel>`
  display: flex;
  align-items: center;
  border-radius: 12px/50%;
  height: 24px;
  width: max-content;
  padding: 10px 6px;
  color: var(--PokeWhite);
  background: #000000;
  text-transform: capitalize;
`;
