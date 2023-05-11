import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: 12,
    backgroundColor: colors.progressEmpty,
    overflow: 'hidden',
    flex: 10,
  },
  progress: {
    height: 12,
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  value: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 5,
    fontWeight: 500,
  },
});
