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
  const { page, totalPokemons } = useAppSelector((state) => state.pokemons);
  const dispatcher = useAppDispatch();

  const setPages = () => {
    const Pages =
      totalPokemons % 12 === 0
        ? Math.floor(totalPokemons / 12)
        : Math.floor(totalPokemons / 12) + 1;
    return Pages;
  };
  const totalPages = setPages();

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //

  const NextPageHandler: MouseEventHandler = (_event) => {
    if (page < totalPages) dispatcher(getPokemons({ page: page + 1 }));
  };
  const PrevPageHandler: MouseEventHandler = (_event) => {
    if (page > 1) dispatcher(getPokemons({ page: page - 1 }));
  };
  const InputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newPage = parseInt(event.target.value);
    if (newPage >= 1 && newPage <= totalPages) dispatcher(getPokemons({ page: newPage }));
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
            type='text'
            name='pokePage'
            id='pokePage'
            inputMode='numeric'
            value={page}
            onChange={InputChangeHandler}
          />
          <span className='TotalPages'>of {totalPages}</span>
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
