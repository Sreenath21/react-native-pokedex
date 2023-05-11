import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    color: colors.primary,
  },
  status: {
    flex: 2,
    fontSize: 18,
    paddingLeft: 10,
    color: colors.primary,
  },
  expandedBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandedBtnText: {
    color: colors.primary,
    fontSize: 18,
  },
  body: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
