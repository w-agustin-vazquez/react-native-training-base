import { AppColors } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bookInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  data: {
    marginBottom: 20,
    marginLeft: 20,
    width: '65%'
  },
  image: {
    height: 105,
    width: '27%'
  },
  status: {
    fontWeight: 'bold',
    color: AppColors.atlantis
  },
  button: {
    width: '100%',
    marginVertical: 5
  }
});
