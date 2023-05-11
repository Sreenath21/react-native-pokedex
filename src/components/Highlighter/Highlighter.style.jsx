import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
  },
  wrapper: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
  },
});
