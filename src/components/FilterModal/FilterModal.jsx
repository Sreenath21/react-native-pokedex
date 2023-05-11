import React, {useContext} from 'react';
import {View, Text, Modal, Pressable, ScrollView} from 'react-native';

import AccordionItem from '../AccordionItem/AccordionItem';
import CheckBoxContainer from '../CheckBoxContainer/CheckBoxContainer';
import {TypesContext} from '../../context/TypesContext';
import styles from './FilterModal.style';
import {
  lookForGenders,
  removeItemsFromArray,
} from '../../utils/helplerFunctions';

const FilterModal = ({modalVisible, setModalVisible}) => {
  const {
    filteredTypes,
    setFilteredTypes,
    checked,
    setChecked,
    genders,
    setGenders,
  } = useContext(TypesContext);

  // console.log('CHECKED...', checked);
  // console.log('TYPES: ', filteredTypes);
  // console.log('GENDERS: ', genders);

  const onReset = () => {
    setFilteredTypes([]);
    setChecked([]);
    setGenders([]);
    setModalVisible(false);
  };

  const onApply = () => {
    // setFilteredTypes([...checked]);
    const removedGenders = removeItemsFromArray(checked, [
      'male',
      'female',
      'genderless',
    ]);
    const onlyGenders = lookForGenders(checked);

    setFilteredTypes([...removedGenders]);
    setGenders([...onlyGenders]);
    setModalVisible(false);
  };

  const onClose = () => {
    setChecked([...filteredTypes, ...genders]);
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filters</Text>
            <Pressable style={styles.headerBtn} onPress={onClose}>
              <Text style={styles.headerBtnText}>X</Text>
            </Pressable>
          </View>

          {/*  Accordion  */}
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <AccordionItem title="Type">
              <CheckBoxContainer title="Type" />
            </AccordionItem>

            <AccordionItem title="Gender">
              <CheckBoxContainer title="Gender" />
            </AccordionItem>
          </ScrollView>
        </View>

        {/* ABSOLUTE BUTTON CONTAINER */}
        <View style={styles.btnContainer}>
          <Pressable
            testID="reset"
            style={[styles.btn, styles.btnSecondary]}
            onPress={onReset}>
            <Text style={[styles.btnText, styles.btnSecondaryText]}>Reset</Text>
          </Pressable>

          <Pressable
            testID="apply"
            style={[styles.btn, styles.btnPrimary]}
            onPress={onApply}>
            <Text style={[styles.btnText, styles.btnPrimaryText]}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
