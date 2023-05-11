import {StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBackground,
    // flex: 1,
  },
  innerContainer: {
    marginVertical: 12,
    marginHorizontal: 24,
  },

  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },

  modalContainer: {
    backgroundColor: colors.primary,
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '50%',
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalDescription: {
    flex: 1,
    color: '#fff',
  },
  closeBtn: {
    alignSelf: 'flex-start',
  },
  closeBtnText: {
    fontSize: 16,
    color: '#fff',
  },
});
