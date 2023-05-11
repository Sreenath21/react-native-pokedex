import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {getZeroFilledId} from '../../utils/helplerFunctions';
import styles from './DexTitle.style';

const DexTitle = ({name, id, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name.toUpperCase()}</Text>
        <Text style={styles.id}>{getZeroFilledId(id)}</Text>
      </View>

      <Pressable
        style={styles.btnContainer}
        // onPress={() => navigation.navigate('Home')}>
        onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Text style={styles.closeButton}>x</Text>
      </Pressable>
    </View>
  );
};

export default DexTitle;
