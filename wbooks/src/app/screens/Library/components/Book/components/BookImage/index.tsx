import React from 'react';
import { ImageStyle } from 'react-native';
import { Image, View } from 'react-native';

import { styles } from './styles';

interface Props {
  imageUrl: string | null;
  style?: ImageStyle;
}

function BookImage({ imageUrl, style }: Props) {
  const imageStyle = {
    ...styles.img,
    ...style
  };

  return imageUrl ? (
    <Image style={imageStyle} source={{ uri: imageUrl }} />
  ) : (
    <View style={imageStyle} />
  );
}

export default BookImage;
