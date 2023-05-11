import React, {useMemo, useEffect, useState, useCallback} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import InputField from '../../components/InputField/InputField';
import PokemonCards from '../../components/PokemonCards/PokemonCards';
import FilterModal from '../../components/FilterModal/FilterModal';

import {fetchPokemonIds} from '../../redux/features/pokeIdsSlice';
import styles from './Home.style';

const Home = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const pokemonDetails = useSelector(state => state.pokemonDetails);
  const pokemonIds = useSelector(state => state.pokemonIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonIds());
  }, []);

  const HeaderComponent = useMemo(() => {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text testID="title" style={styles.title}>
            Pokédex
          </Text>
        </View>
        <Text style={styles.info}>
          Search for any Pokémon that exists on the planet
        </Text>

        <InputField
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setModalVisible={setModalVisible}
        />
      </View>
    );
  }, [searchTerm]);

  if (pokemonIds.loading || pokemonDetails.loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (pokemonIds.error !== null || pokemonDetails.error) {
    console.log('ID ERROR: ', pokemonIds.error);
    console.log('DETAILS ERROR: ', pokemonDetails.error);

    return (
      <View>
        <Text>{pokemonDetails.error || pokemonIds.error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {pokemonDetails.data.length > 0 && (
            <PokemonCards
              searchTerm={searchTerm}
              HeaderComponent={HeaderComponent}
              navigation={navigation}
            />
          )}
        </View>
      </View>

      <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Home;
