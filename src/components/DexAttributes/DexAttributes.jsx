import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {PokemonContext} from '../../context/PokemonContext';
import DexTile from '../DexTile/DexTile';
import {
  getHeight,
  stringifyGender,
  stringifyAbilites,
} from '../../utils/helplerFunctions';
import styles from './DexAttributes.style';

const DexAttributes = () => {
  const {
    pokemon: {height, weight, genders, eggGroups, abilities, types, weaknesses},
  } = useContext(PokemonContext);

  return (
    <View style={styles.container}>
      <View style={styles.twoColumns}>
        <DexTile attribute="Height" value={getHeight(height)} />
        <DexTile attribute="Weight" value={`${weight / 10} Kg`} />
      </View>

      <View style={styles.twoColumns}>
        <DexTile attribute={'Gender(s)'} value={stringifyGender(genders)} />
        <DexTile attribute="Egg Groups" value={eggGroups?.join(', ')} />
      </View>

      <View style={styles.twoColumns}>
        <DexTile attribute="Abilities" value={stringifyAbilites(abilities)} />
        <DexTile attribute="Types" value={types.map(type => type.type.name)} />
      </View>

      <View style={styles.oneColumns}>
        <DexTile attribute="Weak Against" value={weaknesses} />
      </View>
    </View>
  );
};

export default DexAttributes;
