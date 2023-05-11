import React from 'react';
import DexAttributes from './DexAttributes';
import {render} from '@testing-library/react-native';
import PokemonContextProvider from '../../context/PokemonContext';

it('Renders DexAttributes correctly', () => {
  const screen = render(<DexAttributes />, {wrapper: PokemonContextProvider});

  screen.getByText(/height/i);
  expect(screen).toMatchSnapshot();
});
