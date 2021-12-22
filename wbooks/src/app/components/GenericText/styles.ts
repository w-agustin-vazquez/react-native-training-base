import { AppColors } from "@constants/colors";
import { StyleSheet } from "react-native";
import { FONTS, textVariants } from "./constants";

export const styles = StyleSheet.create({
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
});
