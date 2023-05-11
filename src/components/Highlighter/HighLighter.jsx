import React from 'react';
import {View, Text} from 'react-native';

import {capitalize} from '../../utils/helplerFunctions';
import colors from '../../utils/colors';
import styles from './Highlighter.style';

const HighLighter = ({textArray}) => {
  return (
    <View style={styles.container}>
      {textArray?.map(text => (
        <View
          style={[
            styles.wrapper,
            {backgroundColor: colors[text.toLowerCase()]},
          ]}
          key={text}>
          <Text style={styles.text}>{capitalize(text)}</Text>
        </View>
      ))}
    </View>
  );
};

export default HighLighter;
