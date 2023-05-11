import {StyleSheet} from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  value: {
    fontSize: 16,
    color: colors.primary,
  },
});
