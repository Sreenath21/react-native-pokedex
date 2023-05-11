import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    // flex: 1,
    width: '40%',
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  text: {
    color: colors.primary,
  },
});
