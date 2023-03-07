import { PokemonResponse, PokemonType } from '#/Assets/Types/Pokemon';
import { PokeContainer } from '#/Assets/styled-components/PokeContainer';
import type { PokeContainerProps } from '#/Assets/styled-components/PokeContainer';
import { useEffect, useState } from 'react';
import { PokemonAPI } from '#/Assets/API/PokemonAPI';
import { PokeTypeLabel } from '#/Assets/styled-components/PokeTypeLabel';

export interface PokemonBoxProps extends PokeContainerProps {
  pokemonURL?: string;
}

const PokemonBox = (props: PokemonBoxProps) => {
  const PokeURL = typeof props.pokemonURL !== 'undefined' ? props.pokemonURL?.slice(25) : null;
  //console.log(PokeURL);

  const PokemonInitState: PokemonResponse = {
    id: 0,
    name: '',
    sprites: {
      front_default: '',
    },
    types: [],
  };

  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const [Pokemon, setPokemon] = useState<PokemonResponse>(PokemonInitState);

  useEffect(() => {
    if (PokeURL !== null) {
      const PokemonObject = PokemonAPI.get<PokemonResponse>(PokeURL);
      PokemonObject.then((Response) => setPokemon(Response.data));
    }
  }, []);

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  /*const actionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //TO DO Here
  }; //*/

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //

  return (
    <>
      <PokeContainer className='PokeContainer' styledProps={props.styledProps}>
        <img src={Pokemon?.sprites.front_default} className='Pokemon__Sprite' />
        <div className='Pokemon__Info'>
          <div className='PokeBox__NameID'>
            <span className='Pokemon__Info-id PokeInfo'>{Pokemon?.id}</span>
            <span className='Pokemon__Info-name PokeInfo'>{Pokemon?.name}</span>
          </div>
          <div className='PokeBox__Types'>
            {Pokemon.types.map((pokeType, index) => (
              <PokeTypeLabel className='Pokemon__Info-type' key={index}>
                {pokeType.type.name}
              </PokeTypeLabel>
            ))}
          </div>
        </div>
      </PokeContainer>
    </>
  );
};
export default PokemonBox;
