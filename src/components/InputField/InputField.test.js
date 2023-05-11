import React from 'react';
import InputField from './InputField';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

it('InputField renders correctly', () => {
  const tree = renderer.create(
    <InputField setModalVisible={jest.fn()} setSearchTerm={jest.fn()} />,
  );
  expect(tree).toMatchSnapshot();
});

it('InputField should update on search term changes', () => {
  const setSearchTerm = jest.fn();
  const screen = render(
    <InputField setModalVisible={jest.fn()} setSearchTerm={setSearchTerm} />,
  );

  fireEvent.changeText(
    screen.getByPlaceholderText('Name or Number'),
    'pikachu',
  );
  expect(setSearchTerm).toBeCalled();
});
