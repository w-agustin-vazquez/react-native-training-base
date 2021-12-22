import React from 'react'
import { Text, TextStyle } from 'react-native'

import { textVariants } from './constants'
import { styles } from './styles'

interface Props {
  children: string;
  style?: TextStyle;
  variant?: textVariants;
}

function GenericText({ children, style, variant = textVariants.p1 }: Props) {
  const textStyle = {
    ...styles[variant],
    ...style
  }
  return (
    <Text style={textStyle}>
      {children}
    </Text>
  )
}

export default GenericText
