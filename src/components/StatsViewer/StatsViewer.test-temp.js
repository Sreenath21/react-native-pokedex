import React from 'react';
import StatsViewer from './StatsViewer';
import {render} from '@testing-library/react-native';

import {getStatsObject} from '../../utils/helplerFunctions';
import PokemonContextProvider from '../../context/PokemonContext';

it('StatsViewer component renders correctly', () => {
  const screen = render(<StatsViewer />, {wrapper: PokemonContextProvider});
  expect(screen).toMatchSnapshot();
});
