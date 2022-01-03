import { AppColors } from '@constants/colors';
import { StyleSheet } from 'react-native';

const ICON_SQUARE_SIZE = 30;

export const styles = StyleSheet.create({
  icon: {
    width: ICON_SQUARE_SIZE,
    height: ICON_SQUARE_SIZE,
    tintColor: AppColors.dustyGray
  },
  active: {
    tintColor: AppColors.cerulean
  }
});
