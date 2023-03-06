import './Styles/PokemonApp.scss';
import PokemonTitle from '#/Assets/Components/Pokemon/PokemonTitle';
import PokemonList from '#/Assets/Components/Pokemon/PokemonList';

function PokemonApp() {
  // -------------- STARTING HOOKS -------------- //

  // -------------- RETURN COMPONENT -------------- //
  return (
    <main>
      <PokemonTitle />
      <PokemonList />
    </main>
  );
}

export default PokemonApp;
