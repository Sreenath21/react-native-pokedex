import React from 'react';
import CheckBoxWrapper from './CheckBoxWrapper';
import {render} from '@testing-library/react-native';
import TypesContextProvider from '../../context/TypesContext';

it('Renders Default Types', () => {
  const screen = render(<CheckBoxWrapper name="Normal" />, {
    wrapper: TypesContextProvider,
  });

  screen.getByText('Normal');
  expect(screen).toMatchSnapshot();
});
