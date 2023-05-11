import reducer, {fetchIds, fetchPokemonIds, initialState} from './pokeIdsSlice';

describe('Fetching IDs', () => {
  it('Should return correct ID', async () => {
    const post = await fetchIds();
    expect(post[5].name).toBe('charizard');
    expect(post[0].url).toBe('https://pokeapi.co/api/v2/pokemon/1/');
  });

  it('Should set loading to true when fetching IDs', () => {
    const action = {type: fetchPokemonIds.pending.type};
    const state = reducer(initialState, action);
    expect(state).toEqual({loading: true, data: [], error: null});
  });

  it('Should set loading to false and update data when fetching IDs fulfilled', () => {
    const action = {
      type: fetchPokemonIds.fulfilled.type,
      payload: [{id: 1}, {id: 2}],
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      loading: false,
      data: [{id: 1}, {id: 2}],
      error: null,
    });
  });

  it('Should set loading to false and update error when fetch IDs rejected', () => {
    const action = {
      type: fetchPokemonIds.rejected.type,
      error: {message: 'Some error'},
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({loading: false, data: [], error: 'Some error'});
  });
});
