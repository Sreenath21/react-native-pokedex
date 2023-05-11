import React from 'react';
import {View, Text} from 'react-native';

import Progress from '../Progress/Progress';
import styles from './StatsBar.style';

const StatsBar = ({name, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Progress value={value} />
    </View>
  );
};

export default StatsBar;
