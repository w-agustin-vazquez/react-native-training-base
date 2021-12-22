import React from 'react'
import { Text } from 'react-native'

import { textVariants, TEXT_STYLES } from './constants'

interface Props {
  children: string
  variant?: textVariants
}

function GenericText({ children, variant = textVariants.p1 }: Props) {
  return (
    <Text style={TEXT_STYLES[variant]}>
      {children}
    </Text>
  )
}

export default GenericText
