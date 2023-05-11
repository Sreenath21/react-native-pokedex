import React from 'react';
import Progress from './Progress';
import renderer from 'react-test-renderer';

it('Progress component renders correctly', () => {
  const tree = renderer.create(<Progress value={80} />);

  expect(tree).toMatchSnapshot();
});
