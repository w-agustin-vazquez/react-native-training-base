import React, { PropsWithChildren } from 'react'
import { View, Pressable, ViewStyle } from 'react-native'

import { styles } from './styles'

interface Props {
  handlePress?: () => void;
  style?: ViewStyle;
}

const Card = ({ children, handlePress, style }: PropsWithChildren<Props>) => {
  const Component = handlePress ? Pressable : View
  const props = handlePress ? { onPress: handlePress } : {}
  const cardStyle = {
    ...styles.card,
    ...style
  }

  return (
    <Component style={cardStyle} {...props}>
      {children}
    </Component>
  )
}

export default Card
