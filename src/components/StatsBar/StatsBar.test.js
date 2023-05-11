import React from 'react';
import StatsBar from './StatsBar';
import renderer from 'react-test-renderer';

it('StatsBar component renders correctly', () => {
  const tree = renderer.create(<StatsBar name="Height" value={80} />);
  expect(tree).toMatchSnapshot();
});
