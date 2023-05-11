import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.statsBackground,
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  innerContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: colors.primary,
  },
  barContainer: {},
});
