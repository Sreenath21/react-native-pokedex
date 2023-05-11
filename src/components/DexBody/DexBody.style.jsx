import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
  },
  preview: {
    flexDirection: 'row',
    gap: 20,
    height: 225,
  },
  descriptionContainer: {
    flex: 1,
    gap: 5,
    // flexWrap: 'wrap',
    // backgroundColor: 'red',
  },
  description: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    color: colors.primary,
    // backgroundColor: 'yellow',
  },
  button: {
    // flex: 2,
    alignSelf: 'flex-start',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: colors.primary,
  },
});
