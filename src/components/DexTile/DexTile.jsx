import React from 'react';
import {View, Text} from 'react-native';

import HighLighter from '../Highlighter/HighLighter';
import styles from './DexTile.style';

const DexTile = ({attribute, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{attribute}</Text>
      {typeof value === 'string' ? (
        <Text style={styles.value}>{value}</Text>
      ) : (
        <HighLighter textArray={value} />
      )}
    </View>
  );
};

export default DexTile;
