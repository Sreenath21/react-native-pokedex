import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 32,
  },
  titleContainer: {},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 1.2,
  },
  id: {
    fontSize: 32,
    fontWeight: 400,
    color: colors.primary,
  },
  btnContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
  },
  closeButton: {
    fontSize: 24,
    color: colors.primary,
    textAlign: 'center',
  },
});
