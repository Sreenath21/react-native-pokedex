import reducer, {
  fetchDetails,
  fetchGenders,
  initialState,
  fetchPokemonDetails,
  fetchPokemonGenders,
} from './pokeDetailsSlice';

const urls = [
  'https://pokeapi.co/api/v2/pokemon/1/',
  'https://pokeapi.co/api/v2/pokemon/2/',
];

describe('Fetching details', () => {
  it('Should return correct height and weight', async () => {
    const details = await fetchDetails(urls);
    expect(details[0].height).toBe(7);
    expect(details[1].weight).toBe(130);
  });

  it('Should return correct pokemon of the gender', async () => {
    const genders = await fetchGenders(['/gender/1', '/gender/2', '/gender/3']);
    expect(genders.female.includes('petilil')).toBeTruthy();
    expect(genders.male.includes('sawk')).toBeTruthy();
    expect(genders.genderless.includes('magnemite')).toBeTruthy();
  });

  it('Should set loading to true when fetching details', () => {
    const action = {type: fetchPokemonDetails.pending.type};
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  //
  it('Should set loading to false and error value when fetching details failed', () => {
    const action = {
      type: fetchPokemonDetails.rejected.type,
      error: {message: 'Some error'},
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Some error');
  });

  it('Should set loading false and update data when when fetching details fulfilled', () => {
    const action = {
      type: fetchPokemonDetails.fulfilled.type,
      payload: [{id: 1}, {id: 2}],
    };
    const state = reducer(initialState, action);
    expect(state.data).toEqual([{id: 1}, {id: 2}]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('Should set loading to true when fetching genders', () => {
    const action = {type: fetchPokemonGenders.pending.type};
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Should set loading false and update data when when fetching genders fulfilled', () => {
    const action = {
      type: fetchPokemonGenders.fulfilled.type,
      payload: {male: [1, 2, 3], female: [1, 2, 3], genderless: [5, 6]},
    };
    const state = reducer(initialState, action);
    expect(state.genderData).toEqual({
      male: [1, 2, 3],
      female: [1, 2, 3],
      genderless: [5, 6],
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('Should set loading to false and error value when fetching genders failed', () => {
    const action = {
      type: fetchPokemonGenders.rejected.type,
      error: {message: 'Some error'},
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Some error');
  });
});
