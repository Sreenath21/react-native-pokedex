import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchPokemonDetails} from './pokeDetailsSlice';

import pokeapi from '../../api/pokeapi';

export const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchIds = async (_, thunkApi) => {
  const {data} = await pokeapi.get('/pokemon?limit=15');
  const urls = data.results.map(poke => poke.url);
  thunkApi && thunkApi.dispatch(fetchPokemonDetails(urls));
  return data.results;
};

export const fetchPokemonIds = createAsyncThunk('pokeIds/fetchIds', fetchIds);

const pokeIdsSlice = createSlice({
  name: 'pokeIds',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPokemonIds.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonIds.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPokemonIds.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default pokeIdsSlice.reducer;
