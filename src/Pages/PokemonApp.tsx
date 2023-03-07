import './Styles/PokemonApp.scss';
import PokemonTitle from '#/Assets/Components/Pokemon/PokemonTitle';
import PokemonList from '#/Assets/Components/Pokemon/PokemonList';
import { useAppDispatch } from '#/Hooks/useTypedSelector';
import { getTotalPokemons } from '#/ReduxStore/Slices/Pokemon';

function PokemonApp() {
  // -------------- STARTING HOOKS -------------- //
  const dispatcher = useAppDispatch();
  dispatcher(getTotalPokemons());

  // -------------- RETURN COMPONENT -------------- //
  return (
    <main>
      <PokemonTitle />
      <PokemonList />
    </main>
  );
}

export default PokemonApp;
