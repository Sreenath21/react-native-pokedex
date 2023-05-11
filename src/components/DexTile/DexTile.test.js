import 'react-native';
import React from 'react';
import DexTile from './DexTile';
import renderer from 'react-test-renderer';

it('Checking DexTile component rendering correctly', () => {
  const tree = renderer.create(<DexTile attribute="abilities" value="Blaze" />);
  expect(tree).toMatchSnapshot();
});
