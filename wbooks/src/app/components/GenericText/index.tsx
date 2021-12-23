import React, { PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

import { textVariants } from './constants';
import { styles } from './styles';

interface Props {
  style?: TextStyle;
  variant?: textVariants;
}

function GenericText({ children, style, variant = textVariants.p1 }: PropsWithChildren<Props>) {
  const textStyle = {
    ...styles[variant],
    ...style
  };
  return <Text style={textStyle}>{children}</Text>;
}

export default GenericText;
