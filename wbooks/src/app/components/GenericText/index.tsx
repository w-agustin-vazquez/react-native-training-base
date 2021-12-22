import React from 'react'
import { Text } from 'react-native'

import { textVariants } from './constants'
import { styles } from './styles'

interface Props {
  children: string
  variant?: textVariants
}

function GenericText({ children, variant = textVariants.p1 }: Props) {
  return (
    <Text style={styles[variant]}>
      {children}
    </Text>
  )
}

export default GenericText
