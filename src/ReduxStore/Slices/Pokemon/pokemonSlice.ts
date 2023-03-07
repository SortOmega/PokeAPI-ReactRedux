import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '.';
import type { PokePageIndexResponse, PokemonURL } from '#/Assets/Types/Pokemon';
//import type { PayloadAction } from '@reduxjs/toolkit'; //For Typescript //

interface pokemonStates {
  page: number;
  pokemons: PokemonURL[];
  isLoading?: boolean;
  error?: null | string;
}

const initialState: pokemonStates = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<pokemonStates>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPokemons.pending, (_state, _action) => {
        _state.isLoading = true;
        _state.pokemons = [];
      })
      .addCase(getPokemons.fulfilled, (state, action: PayloadAction<PokePageIndexResponse>) => {
        state.isLoading = false;
        state.pokemons = action.payload.results;
      })
      .addCase(getPokemons.rejected, (_state, _action: PayloadAction<any>) => {
        _state.isLoading = false;
        _state.error = _action.payload;
      });
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
