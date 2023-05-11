import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './AccordionItem.style';

const AccordionItem = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>Status</Text>
        <Pressable
          style={styles.expandedBtn}
          onPress={() => setExpanded(!expanded)}>
          <Text style={styles.expandedBtnText}>+</Text>
        </Pressable>
      </View>
      {expanded && <View style={styles.body}>{children}</View>}
    </View>
  );
};

export default AccordionItem;
