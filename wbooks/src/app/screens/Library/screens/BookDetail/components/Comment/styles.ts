import { AppColors } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    paddingTop: 15
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50
  },
  data: {
    marginLeft: 10,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.iron,
    paddingBottom: 15
  },
  author: {
    marginBottom: 5
  }
});
