import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import GenericText from '../GenericText';

import { buttonVariants } from './constants';
import { styles, textStyles } from './styles';

interface Props {
  handlePress: () => void;
  variant?: buttonVariants;
  disabled?: boolean;
  style?: ViewStyle;
  title?: string;
}

const Button = ({
  handlePress,
  children,
  title,
  disabled,
  style,
  variant = buttonVariants.primary
}: PropsWithChildren<Props>) => {
  const buttonStyle = {
    ...styles.btn,
    ...(disabled ? styles.DISABLED : styles[variant]),
    ...style
  };
  const textStyle = {
    ...textStyles.btnText,
    ...textStyles[variant]
  };
  return (
    <TouchableOpacity onPress={handlePress} style={buttonStyle} disabled={disabled}>
      {title ? <GenericText style={textStyle}>{title}</GenericText> : children}
    </TouchableOpacity>
  );
};

export default Button;
