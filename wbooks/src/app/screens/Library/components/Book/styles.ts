import { AppColors } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  book: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: AppColors.white
  },
  textContainer: {
    width: '70%',
    marginLeft: 20
  },
  title: {
    marginBottom: 4
  }
});
