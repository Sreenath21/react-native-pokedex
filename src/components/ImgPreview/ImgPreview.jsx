import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {PokemonContext} from '../../context/PokemonContext';
import {getGradient} from '../../utils/helplerFunctions';
import styles from './ImgPreivew.style';

const ImgPreview = () => {
  const {pokemon} = useContext(PokemonContext);

  return (
    <View style={styles.thumbnailContainer}>
      <LinearGradient style={styles.gradient} colors={getGradient(pokemon)}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
          }}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

export default ImgPreview;
