import React, { PropsWithChildren } from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  handlePress?: () => void;
  style?: ViewStyle;
}

const Card = ({ children, handlePress, style }: PropsWithChildren<Props>) => {
  const Component = handlePress ? TouchableOpacity : View;
  const props = handlePress ? { onPress: handlePress } : {};
  const cardStyle = {
    ...styles.card,
    ...style
  };

  return React.createElement(Component, { style: cardStyle, ...props }, children);
};

export default Card;
