import React, {useContext} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  getZeroFilledId,
  capitalize,
  getGradient,
} from '../../utils/helplerFunctions';
import {PokemonContext} from '../../context/PokemonContext';
import styles from './PokeThumbnail.style';

const PokeThumbnail = ({pokemon, navigation}) => {
  const {setPokemon} = useContext(PokemonContext);

  const handlePress = () => {
    setPokemon(pokemon);
    navigation.navigate('Data', {id: pokemon.id, name: pokemon.name});
  };

  return (
    <Pressable testID="card" onPress={handlePress}>
      <View style={styles.thumbnailContainer}>
        <LinearGradient style={styles.gradient} colors={getGradient(pokemon)}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
              }}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Text style={styles.id}>{getZeroFilledId(pokemon.id)}</Text>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

export default PokeThumbnail;
