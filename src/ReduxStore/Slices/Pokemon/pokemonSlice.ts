import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getPokemons, getTotalPokemons } from '.';
import type { PokePageIndexResponse, PokemonURL } from '#/Assets/Types/Pokemon';
//import type { PayloadAction } from '@reduxjs/toolkit'; //For Typescript //

interface pokemonStates {
  page: number;
  pokemons: PokemonURL[];
  totalPokemons?: number;
  isLoading?: boolean;
  error?: null | string;
}

const initialState: pokemonStates = {
  page: 0,
  pokemons: [],
  totalPokemons: 0,
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },

    setTotalPokemons: (state, action: PayloadAction<number>) => {
      state.totalPokemons = action.payload;
    },
    setPokemons: (state, action: PayloadAction<pokemonStates>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
  extraReducers(builder) {
    builder
      // METHOD: getPokemons -----------------------------------------------------------
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
      })

      // METHOD: getTotalPokemons -----------------------------------------------------------
      .addCase(getTotalPokemons.fulfilled, (state, action: PayloadAction<number>) => {
        state.totalPokemons = action.payload;
      });
  },
});

export const { startLoadingPokemons, setPokemons, setTotalPokemons } = pokemonSlice.actions;
