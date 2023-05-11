import {StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 24,
    height: 60,
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#dbe4ff',
    flex: 3,
    marginRight: 24,
    borderRadius: 10,
  },
  input: {
    flex: 3,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  filter: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
