import {
  getAbilities,
  getGradient,
  getZeroFilledId,
  removeItemsFromArray,
} from './helplerFunctions';
import colors from './colors';

describe('Helper Function', () => {
  it('Should show leading zero', () => {
    expect(getZeroFilledId(1)).toBe('001');
  });

  it('Should return HEX code to show gradient', () => {
    const pokemon = {
      types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
    };
    expect(getGradient(pokemon).join('')).toBe(
      `${colors.grass}${colors.poison}`,
    );
  });

  it('Should return abilities seperated by "/"', () => {
    const abilities = [
      {ability: {name: 'overgrow'}},
      {ability: {name: 'chlorophyll'}},
    ];
    expect(getAbilities(abilities).join('/')).toBe('overgrow/chlorophyll');
  });

  it('Should items from the second array', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5];
    expect(removeItemsFromArray(arr1, arr2)).toHaveLength(3);
  });
});
