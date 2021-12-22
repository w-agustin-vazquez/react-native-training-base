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

const TEXT_WEIGHTS: Record<string, TextStyle["fontWeight"]> = {
  light: '300',
  normal: 'normal',
  semiBold: '500',
}

export const TEXT_STYLES: Record<textVariants, TextStyle> = {
  [textVariants.h1]: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: TEXT_WEIGHTS.semiBold
  },
  [textVariants.h2]: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: TEXT_WEIGHTS.normal
  },
  [textVariants.h3]: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: TEXT_WEIGHTS.semiBold
  },
  [textVariants.h4]: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: TEXT_WEIGHTS.semiBold
  },
  [textVariants.p1]: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: TEXT_WEIGHTS.normal
  },
  [textVariants.p2]: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: TEXT_WEIGHTS.semiBold
  },
  [textVariants.p3]: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: TEXT_WEIGHTS.normal
  },
  [textVariants.p5]: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: TEXT_WEIGHTS.light,
    fontStyle: 'italic'
  },
}