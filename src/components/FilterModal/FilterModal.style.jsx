import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  outerContainer: {
    marginVertical: 28,
    marginHorizontal: 24,
    backgroundColor: '#fff',
    height: '95%',
    borderRadius: 10,
  },
  innerContainer: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    flex: 1,
  },
  headerBtn: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  headerBtnText: {
    fontSize: 16,
    fontWeight: 600,
  },
  scrollContainer: {
    marginBottom: 150,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  btn: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnPrimary: {
    backgroundColor: colors.primary,
  },
  btnSecondary: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  btnText: {},
  btnPrimaryText: {
    color: '#fff',
  },
  btnSecondaryText: {
    color: colors.primary,
  },
});
