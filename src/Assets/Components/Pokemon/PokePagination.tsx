import { ChangeEventHandler, MouseEventHandler } from 'react'; //*/

import { PokeButton } from '#/Assets/styled-components/PokeButton';
import { PokePaginationStyled } from '#/Assets/styled-components/PokePaginationStyled';
import { useAppSelector, useAppDispatch } from '#/Hooks/useTypedSelector';
import { getPokemons } from '#/ReduxStore/Slices/Pokemon';

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

  const NextPageHandler: MouseEventHandler = (_event) => {
    dispatcher(getPokemons({ page: page + 1 }));
  };
  const PrevPageHandler: MouseEventHandler = (_event) => {
    if (page > 0) dispatcher(getPokemons({ page: page - 1 }));
  };
  const InputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newPage = parseInt(event.target.value);
    if (newPage >= 0) dispatcher(getPokemons({ page: newPage }));
  }; //*/

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //

  return (
    <>
      <PokePaginationStyled>
        <div className='PageLabel'>
          <label htmlFor='pokePage'>Page:</label>
          <input
            type='number'
            name='pokePage'
            id='pokePage'
            inputMode='numeric'
            value={page}
            onChange={InputChangeHandler}
          />
        </div>
        <div className='PageActions'>
          <PokeButton onClick={PrevPageHandler}>Previus Page</PokeButton>
          <PokeButton onClick={NextPageHandler}>Next Page</PokeButton>
        </div>
      </PokePaginationStyled>
    </>
  );
};

export default PokePagination;
