import { setPokemons } from '.';
import { PokemonAPI } from '../../../Assets/API/PokemonAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PokePageIndexResponse } from '#/Assets/Types/Pokemon';

// Async Thunk Action
export const getPokemons = createAsyncThunk<
  PokePageIndexResponse,
  { page: number }
>(`pokemon/getPokemons`, async (data, thunkApi) => {
  try {
    const resp = await PokemonAPI.get<PokePageIndexResponse>(
      `/pokemon?limit=12&offset=${data.page * 12}`
    );
    thunkApi.dispatch(
      setPokemons({ pokemons: resp.data.results, page: data.page + 1 })
    );
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
