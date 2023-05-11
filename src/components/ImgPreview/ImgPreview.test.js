import React from 'react';
import ImgPreview from './ImgPreview';
import {render} from '@testing-library/react-native';
import PokemonContextProvider from '../../context/PokemonContext';

it('ImgPreview renders correctly', () => {
  const tree = render(<ImgPreview />, {wrapper: PokemonContextProvider});
  expect(tree).toMatchSnapshot();
});
