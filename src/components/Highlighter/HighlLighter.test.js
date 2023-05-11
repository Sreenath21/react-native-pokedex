import React from 'react';
import HighLighter from './HighLighter';
import renderer from 'react-test-renderer';

it('HighLighter renders correctly', () => {
  const tree = renderer.create(<HighLighter textArray={['Normal', 'Grass']} />);
  expect(tree).toMatchSnapshot();
});
