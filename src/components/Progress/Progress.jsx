import React from 'react';
import {View, Text} from 'react-native';

import styles from './Progress.style';

const Progress = ({value}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.progress, {width: `${value}%`}]} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Progress;
