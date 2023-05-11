import {StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

export default StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.primaryBackground,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    paddingBottom: 10,
    marginBottom: 10,
    paddingTop: 24,
  },
  title: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  info: {
    fontSize: 16,
    color: COLORS.primary,
  },
  cardContainer: {},
  errorTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
