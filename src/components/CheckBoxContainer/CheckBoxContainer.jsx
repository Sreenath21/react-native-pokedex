import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import CheckBoxWrapper from '../CheckBoxWrapper/CheckBoxWrapper';
import pokeapi from '../../api/pokeapi';
import styles from './CheckBoxContainer.style';

const CheckBoxContainer = ({title}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let temp;
      if (title === 'Type') {
        const {data} = await pokeapi.get(`/type/`);
        temp = data.results.map(type => type.name);
      }
      if (title === 'Gender') {
        const {data} = await pokeapi.get('/gender/');
        temp = data.results.map(gender => gender.name);
      }
      setItems(temp);
    };
    fetchData();
  }, []);

  if (items.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {items.map(item => (
        <CheckBoxWrapper title={title} key={item} name={item} />
      ))}
    </View>
  );
};

export default CheckBoxContainer;
