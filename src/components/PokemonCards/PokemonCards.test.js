import React from 'react';
import {View, Text} from 'react-native';
import PokemonCards from './PokemonCards';
import {render} from '@testing-library/react-native';

import PokemonContextProvider from '../../context/PokemonContext';

it('PokemonCards renders correctly', () => {
  const screen = render(
    <PokemonCards
      searchTerm="bulbasaur"
      HeaderComponent={
        <View>
          <Text>HeaderComponent</Text>
        </View>
      }
      // HeaderComponent={React.Component}
      navigation={jest.fn()}
    />,
    {
      wrapper: PokemonContextProvider,
    },
  );

  expect(screen).toMatchSnapshot();
});
