import styled from 'styled-components';

export const PokePaginationStyled = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  @media screen and (min-width: 0px) and (max-width: 670px) {
    flex-direction: column;
  }
  @media screen and (min-width: 670px) {
    flex-direction: row;
  }

  > .PageLabel {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  label,
  input#pokePage,
  span {
    font-size: 16px;
  }

  label,
  span {
    display: flex;
    user-select: none;
  }

  input#pokePage {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 3px 5px;
    width: 75px;
    height: 35px;
    text-align: center;
    user-select: all;

    background: var(--PokeGrayD);
    border: 1px inset var(--PokeGray);
    -webkit-box-shadow: inset 0 0 0 30px var(--PokeGrayD);
    color: var(--PokeWhite);

    &:invalid {
      border-bottom: 3px solid var(--PokeBrown);
    }
    &:focus,
    &:valid {
      -webkit-text-fill-color: var(--PokeWhite);
      caret-color: var(--PokeWhite);
      border-bottom: 3px solid var(--PokeBlueSL);
    }
    &::placeholder {
      color: var(--PokeGrayL);
      -webkit-text-fill-color: var(--PokeGrayL);
    }
    &:placeholder-shown {
      border-bottom: 3px solid var(--Primary);
      -webkit-text-fill-color: var(--PokeGrayL);
    }
  }

  > .PageActions {
    display: flex;
    height: 100%;
  }
`;
