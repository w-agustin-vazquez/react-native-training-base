import React from 'react';
import { ImageSourcePropType, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  icon?: ImageSourcePropType;
  active?: boolean;
}

const Icon = ({ icon, active }: Props) => {
  if (!icon) return null;

  const imgStyle = {
    ...styles.icon,
    ...(active ? styles.active : {})
  };

  return <Image source={icon} style={imgStyle} />;
};

export default Icon;
