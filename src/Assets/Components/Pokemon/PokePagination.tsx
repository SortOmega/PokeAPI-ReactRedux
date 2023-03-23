import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react'; //*/

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
  const [inputPageValue, setInputPageValue] = useState(page.toString());

  const dispatcher = useAppDispatch();

  const setPages = () => {
    if (totalPokemons !== undefined) {
      const Pages =
        totalPokemons % 12 === 0
          ? Math.floor(totalPokemons / 12)
          : Math.floor(totalPokemons / 12) + 1;
      return Pages;
    }
    return 1;
  };
  const totalPages = setPages();

  useEffect(() => {
    setInputPageValue(page.toString());
  }, [page]);

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //

  const NextPageHandler: MouseEventHandler = (_event) => {
    if (page < totalPages) {
      dispatcher(getPokemons({ page: page + 1 }));
    }
  };
  const PrevPageHandler: MouseEventHandler = (_event) => {
    if (page > 1) {
      dispatcher(getPokemons({ page: page - 1 }));
    }
  };

  const searchPageHandler: MouseEventHandler = (_event) => {
    const Reset = () => {
      setInputPageValue(page.toString());
      return;
    };

    if (inputPageValue === '') Reset();

    const newPage = parseInt(inputPageValue);

    if (isNaN(newPage)) Reset();

    if (newPage >= 1 && newPage <= totalPages) {
      //setInputPageValue(page.toString());
      dispatcher(getPokemons({ page: newPage }));
    } else Reset();
  }; //*/

  const InputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputPageValue(event.target.value);
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
            value={inputPageValue}
            onChange={InputChangeHandler}
          />
          <span className='TotalPages'>of {totalPages}</span>
        </div>
        <PokeButton onClick={searchPageHandler}>Search Page</PokeButton>
        <div className='PageActions'>
          <PokeButton inPairs onClick={PrevPageHandler}>
            Previus Page
          </PokeButton>
          <PokeButton inPairs onClick={NextPageHandler}>
            Next Page
          </PokeButton>
        </div>
      </PokePaginationStyled>
    </>
  );
};

export default PokePagination;
