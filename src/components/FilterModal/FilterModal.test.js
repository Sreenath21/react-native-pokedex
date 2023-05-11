import React from 'react';
import FilterModal from './FilterModal';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import TypesContextProvider from '../../context/TypesContext';

describe('FilterModal', () => {
  it('renders correctly', () => {
    const screen = render(
      <FilterModal modalVisible={false} setModalVisible={jest.fn()} />,
      {wrapper: TypesContextProvider},
    );

    expect(screen).toMatchSnapshot();
  });
});
