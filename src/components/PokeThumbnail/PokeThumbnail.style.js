import {StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

export default StyleSheet.create({
  thumbnailContainer: {
    width: 155,
    height: 225,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 10, // check with overflow
  },
  imageContainer: {
    flex: 7,
  },
  image: {
    height: 160,
    width: 160,
    alignSelf: 'center',
    top: 15,
  },
  textContainer: {
    flex: 2,
  },
  name: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  id: {
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: 16,
  },
});
