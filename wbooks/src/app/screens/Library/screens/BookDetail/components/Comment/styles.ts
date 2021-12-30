import { AppColors } from '@constants/colors';
import { StyleSheet } from 'react-native';

const IMG_SQUARE_SIZE = 45;

export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    paddingTop: 15
  },
  image: {
    width: IMG_SQUARE_SIZE,
    height: IMG_SQUARE_SIZE,
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
