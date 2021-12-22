import { AppColors } from "@constants/colors";
import { TextStyle } from "react-native";

// Related to style-guide, p4 was ignored because is the same that P1
export enum textVariants {
  h1 = 'H1',
  h2 = 'H2',
  h3 = 'H3',
  h4 = 'H4',
  p1 = 'P1',
  p2 = 'P2',
  p3 = 'P3',
  p5 = 'P5',
}

const FONTS = {
  light: 'SFUIText-Light',
  lightItalic: 'SFUIText-LightItalic',
  normal: 'SFUIText-Regular',
  semiBold: 'SFUIText-Semibold',
  bold: 'SFUIText-Bold'
}

export const TEXT_STYLES: Record<textVariants, TextStyle> = {
  [textVariants.h1]: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.semiBold,
    color: AppColors.black
  },
  [textVariants.h2]: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONTS.normal,
    color: AppColors.black
  },
  [textVariants.h3]: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONTS.bold,
    color: AppColors.black
  },
  [textVariants.h4]: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: FONTS.semiBold,
    color: AppColors.black
  },
  [textVariants.p1]: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: FONTS.light,
    color: AppColors.black
  },
  [textVariants.p2]: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.semiBold,
    color: AppColors.black
  },
  [textVariants.p3]: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: FONTS.normal,
    color: AppColors.black
  },
  [textVariants.p5]: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: FONTS.lightItalic,
    color: AppColors.black
  },
}