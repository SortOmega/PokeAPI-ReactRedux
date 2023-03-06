import { useAppDispatch, useAppSelector } from '#/Hooks/useTypedSelector';
import { getPokemons } from '#/ReduxStore/Slices/Pokemon';
import { useEffect } from 'react'; //*/
import PokemonBox from './PokemonBox';

const PokemonList = () => {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const { pokemons, isLoading } = useAppSelector((state) => state.pokemons);
  const Dispatcher = useAppDispatch();
  useEffect(() => {
    Dispatcher(getPokemons({ page: 0 }));
  }, [Dispatcher]);

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
    <div id='App__List'>
      {isLoading || pokemons.length === 0 ? (
        <h3 className='EmptyList'>La lista de Pokemons esta vacia</h3>
      ) : (
        <ul>
          {pokemons.map((pokemon, index) => (
            <PokemonBox key={index} pokemonURL={pokemon.url} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
