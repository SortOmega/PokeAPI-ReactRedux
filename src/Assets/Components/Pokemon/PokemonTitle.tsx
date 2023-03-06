/*import { useState, ChangeEvent } from 'react'; //*/

const PokemonTitle = () => {
  const Title = 'My Pokedex';

  return (
    <>
      <div id='App__Title'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' />
        <h1>{Title}</h1>
        <hr />
      </div>
    </>
  );
};

export default PokemonTitle;
