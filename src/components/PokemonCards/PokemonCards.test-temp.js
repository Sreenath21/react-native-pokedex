import React from 'react';
import PokemonCards from './PokemonCards';
import {render} from '@testing-library/react-native';

import PokemonContextProvider from '../../context/PokemonContext';

it('PokemonCards renders correctly', () => {
  const screen = render(
    <PokemonCards
      searchTerm="bulbasaur"
      // HeaderComponent={<View></View>}
      HeaderComponent={React.Component}
      navigation={jest.fn()}
    />,
    {
      wrapper: PokemonContextProvider,
    },
  );

  expect(screen).toMatchSnapshot();
});
