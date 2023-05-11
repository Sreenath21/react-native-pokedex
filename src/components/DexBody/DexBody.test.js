import React from 'react';
import DexBody from './DexBody';
import renderer from 'react-test-renderer';

it('DexBody should render correctly', () => {
  const tree = renderer.create(
    <DexBody description="Some text" setModalVisible={jest.fn()} />,
  );

  expect(tree).toMatchSnapshot();
});
