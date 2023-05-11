import React from 'react';
import DexTitle from './DexTitle';
import renderer from 'react-test-renderer';

it('Checking DexTitle component is rendering', () => {
  const tree = renderer.create(
    <DexTitle name="bulbasaur" id={1} navigation={jest.fn()} />,
  );
  expect(tree).toMatchSnapshot();
});
