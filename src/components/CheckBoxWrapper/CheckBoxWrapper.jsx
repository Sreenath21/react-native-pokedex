import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {TypesContext} from '../../context/TypesContext';
import {capitalize} from '../../utils/helplerFunctions';
import styles from './CheckBoxWrapper.style';

const CheckBoxWrapper = ({title, name}) => {
  const [toggleValue, setToggleValue] = useState(false);
  const {filteredTypes, checked, setChecked, genders} =
    useContext(TypesContext);

  useEffect(() => {
    if (title === 'Type') {
      filteredTypes.some(type => type === name) && setToggleValue(true);
    }
    if (title === 'Gender') {
      genders.some(gen => gen === name) && setToggleValue(true);
    }
  }, []);

  const onValueChange = newValue => {
    setToggleValue(newValue);
    if (newValue) {
      setChecked([...checked, name]);
    } else {
      setChecked(checked.filter(type => type !== name));
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={toggleValue}
        onValueChange={onValueChange}
        boxType="square"
        animationDuration={0.01}
        style={styles.checkbox}
      />

      <Text style={styles.text}>{capitalize(name)}</Text>
    </View>
  );
};

export default CheckBoxWrapper;
