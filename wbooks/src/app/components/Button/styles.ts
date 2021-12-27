import { StyleSheet } from 'react-native';
import { AppColors } from '@constants/colors';

import { buttonVariants } from './constants';

export const styles = StyleSheet.create({
  btn: {
    minWidth: 200,
    minHeight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderRadius: 100
  },
  btnText: {
    fontSize: 15,
    lineHeight: 19
  },
  [buttonVariants.primary]: {
    backgroundColor: AppColors.cerulean
  },
  [buttonVariants.secondary]: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.cerulean,
    borderWidth: 1
  },
  [buttonVariants.disabled]: {
    backgroundColor: AppColors.iron
  },
  [buttonVariants.blank]: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.iron,
    borderWidth: 1
  }
});

export const textStyles = StyleSheet.create({
  btnText: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'bold',
  },
  [buttonVariants.primary]: {
    color: AppColors.white
  },
  [buttonVariants.secondary]: {
    color: AppColors.cerulean
  },
  [buttonVariants.disabled]: {
    color: AppColors.white
  },
  [buttonVariants.blank]: {
    color: AppColors.iron
  }
});
