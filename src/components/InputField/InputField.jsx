import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from './InputField.style';

const InputField = ({setSearchTerm, setModalVisible}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setSearchTerm(value.toLowerCase());
  }, [value]);

  const onTextChange = text => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name or Number"
          keyboardType="default"
          onChangeText={onTextChange}
          value={value}
        />
      </View>
      <Pressable style={styles.filter} onPress={() => setModalVisible(true)}>
        <Text style={{color: '#fff'}}>Filters</Text>
      </Pressable>
    </View>
  );
};

export default InputField;
