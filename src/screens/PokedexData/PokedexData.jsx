import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Modal,
  Pressable,
} from 'react-native';

import DexTitle from '../../components/DexTitle/DexTitle';
import DexBody from '../../components/DexBody/DexBody';
import {PokemonContext} from '../../context/PokemonContext';
import pokeapi from '../../api/pokeapi';
import styles from './PokedexData.style';
import {
  getDescription,
  getEggGroups,
  getGenders,
  getWeaknesses,
} from '../../utils/helplerFunctions';
import StatsViewer from '../../components/StatsViewer/StatsViewer';

const PokedexData = ({navigation, route}) => {
  const {pokemon, setPokemon} = useContext(PokemonContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSize, setModalSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const otherUrls = [
      `/pokemon-species/${route.params.id}`, // get eggGroups and description
      '/gender/male/',
      '/gender/female',
      `/type/${route.params.id}`, // about weaknesses
    ];

    const fetchMoreData = async () => {
      try {
        // Fetch Other datas
        const otherDatas = await Promise.all(
          otherUrls.map(async url => {
            const {data} = await pokeapi.get(url);
            return data;
          }),
        );

        // setting Context including new Data
        setPokemon(prev => ({
          ...prev,
          eggGroups: getEggGroups(otherDatas[0]),
          description: getDescription(otherDatas[0].flavor_text_entries),
          genders: getGenders(route.params.name, otherDatas.slice(1, 3)),
          weaknesses: getWeaknesses(otherDatas[3]),
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoreData();
  }, []);

  const onLayout = event => {
    const {height, width} = event.nativeEvent.layout;
    console.log(height, width);
    setModalSize({...modalSize, height, width});
  };

  const stylesCenterModal = {
    transform: [
      {translateX: -modalSize.width / 2},
      {translateY: -modalSize.height / 3},
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <DexTitle
              name={pokemon.name}
              id={pokemon.id}
              navigation={navigation}
            />
            <DexBody
              description={pokemon?.description}
              setModalVisible={setModalVisible}
            />
          </View>

          <StatsViewer />
        </View>
      </ScrollView>

      {/* MODAL */}

      <Modal visible={modalVisible} transparent animationType="fade">
        <View
          style={[styles.modalContainer, stylesCenterModal]}
          onLayout={onLayout}>
          <Text style={styles.modalDescription}>{pokemon?.description}</Text>
          <Pressable
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.closeBtnText}>X</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PokedexData;
