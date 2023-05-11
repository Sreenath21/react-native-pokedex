import React from 'react';
import {View, Text, Pressable} from 'react-native';

import ImgPreview from '../ImgPreview/ImgPreview';
import DexAttributes from '../DexAttributes/DexAttributes';
import styles from './DexBody.style';

const DexBody = ({description, setModalVisible}) => {
  return (
    <View style={styles.container}>
      {/* IMG && DESC */}
      <View style={styles.preview}>
        <ImgPreview />

        <View style={styles.descriptionContainer}>
          <Text
            numberOfLines={9}
            ellipsizeMode="tail"
            style={styles.description}>
            {description}
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.btnText}>read more</Text>
          </Pressable>
        </View>
      </View>

      {/* Physical Attributes */}
      <View style={styles.attributeContainer}>
        <DexAttributes />
      </View>
    </View>
  );
};

export default DexBody;
