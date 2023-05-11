import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  stat: {
    flex: 3,
  },
  text: {
    color: colors.primary,
  },
});
