import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  thumbnailContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    overflow: 'hidden',
    flex: 1,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
