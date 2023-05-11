import React from 'react';
import {View, Text} from 'react-native';
import AccordionItem from './AccordionItem';
import renderer from 'react-test-renderer';

it('Checking AccordionItem rendering', () => {
  const tree = renderer.create(
    <AccordionItem
      title="Types"
      children={
        <View>
          <Text>Normal</Text>
        </View>
      }
    />,
  );

  expect(tree).toMatchSnapshot();
});
