/*import { useState, ChangeEvent } from 'react'; //*/

import { PokeButton } from '#/Assets/styled-components/PokeButton';
import { PokePaginationStyled } from '#/Assets/styled-components/PokePaginationStyled';
import { useAppSelector, useAppDispatch } from '#/Hooks/useTypedSelector';

const PokePagination = () => {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  /*const [state, setState] = useState<unknown>();//*/
  const { page } = useAppSelector((state) => state.pokemons);
  const dispatcher = useAppDispatch();

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
      <PokePaginationStyled>
        <div className='PageLabel'>
          <label htmlFor='pokePage'>Page:</label>
          <input type='text' name='pokePage' id='pokePage' inputMode='numeric' value={page} />
        </div>
        <div className='PageActions'>
          <PokeButton>Previus Page</PokeButton>
          <PokeButton>Next Page</PokeButton>
        </div>
      </PokePaginationStyled>
    </>
  );
};

export default PokePagination;
