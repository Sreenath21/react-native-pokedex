import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import pokeapi from '../../api/pokeapi';

export const initialState = {
  loading: false,
  data: [],
  genderData: [],
  error: null,
};

export const fetchDetails = async (urls, thunkApi) => {
  const details = await Promise.all(
    urls.map(async url => {
      const {data} = await axios.get(url);
      return data;
    }),
  );
  thunkApi && thunkApi.dispatch(fetchPokemonGenders());

  return details;
};

export const fetchPokemonDetails = createAsyncThunk(
  'pokeDetails/fetchDetails',
  fetchDetails,
);

export const fetchGenders = async (_, thunkApi) => {
  const urls = ['/gender/1', '/gender/2', '/gender/3'];
  const gendersData = await Promise.all(
    urls.map(async url => {
      const {data} = await pokeapi.get(url);
      return {
        [data.name]: data.pokemon_species_details.map(
          p => p.pokemon_species.name,
        ),
      };
    }),
  );
  // console.log('GENDER DATA: ', ...gendersData);
  return {...gendersData[0], ...gendersData[1], ...gendersData[2]};
};

export const fetchPokemonGenders = createAsyncThunk(
  'pokeGenders/fetchGenders',
  fetchGenders,
);

const pokeDetailsSlice = createSlice({
  name: 'pokeDetails',
  initialState,
  extraReducers: builder => {
    // Pokemon DATA
    builder.addCase(fetchPokemonDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPokemonDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // GENDER DATA
    builder.addCase(fetchPokemonGenders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonGenders.fulfilled, (state, action) => {
      state.loading = false;
      state.genderData = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPokemonGenders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default pokeDetailsSlice.reducer;
