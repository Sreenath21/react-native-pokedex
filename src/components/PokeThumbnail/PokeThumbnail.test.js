import React from 'react';
import PokeThumbnail from './PokeThumbnail';
import {render} from '@testing-library/react-native';
import PokemonContextProvider from '../../context/PokemonContext';

it('PokeThumbnail renders correctly', () => {
  const screen = render(
    <PokeThumbnail
      pokemon={{name: 'bulbasaur', id: 1, types: []}}
      navigation={jest.fn()}
    />,
    {wrapper: PokemonContextProvider},
  );

  expect(screen).toMatchSnapshot();
});
