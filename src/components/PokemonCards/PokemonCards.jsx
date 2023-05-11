import React, {useState, useCallback, useContext} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import PokeThumbnail from '../PokeThumbnail/PokeThumbnail';
import {TypesContext} from '../../context/TypesContext';
import {
  filterByGenders,
  filterByTypes,
  removeItemsFromArray,
} from '../../utils/helplerFunctions';
import {fetchPokemonIds} from '../../redux/features/pokeIdsSlice';
import styles from './PokemonCards.style';

const PokemonCards = ({searchTerm, HeaderComponent, navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const pokemonDetails = useSelector(state => state.pokemonDetails);
  const {filteredTypes, genders} = useContext(TypesContext);
  const dispatch = useDispatch();

  // console.log('GENDER DATA', pokemonDetails.genderData.genderless);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPokemonIds());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  const renderCard = ({item}) => {
    return <PokeThumbnail pokemon={item} navigation={navigation} />;
  };

  const getFilteredPokemons = () => {
    let allPokemons = pokemonDetails.data;
    let filteredPokemon;

    if (filteredTypes.length > 0) {
      allPokemons = filterByTypes(pokemonDetails.data, filteredTypes);
    }

    if (genders.length > 0) {
      allPokemons = filterByGenders(
        allPokemons,
        genders,
        pokemonDetails.genderData,
      );
    }

    if (searchTerm.trim().length === 0) {
      filteredPokemon = allPokemons;
    } else {
      filteredPokemon = allPokemons.filter(pokemon => {
        return (
          pokemon?.id.toString().includes(searchTerm) ||
          pokemon?.name.startsWith(searchTerm)
        );
      });
    }

    return filteredPokemon;
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={HeaderComponent}
      data={getFilteredPokemons()}
      keyExtractor={poke => poke.id}
      renderItem={renderCard}
      extraData={searchTerm}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default PokemonCards;
