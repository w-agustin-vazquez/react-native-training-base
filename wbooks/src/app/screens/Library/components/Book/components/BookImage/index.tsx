import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

function BookImage({ imageUrl }: { imageUrl: string | null }) {
  return imageUrl ? <Image style={styles.img} source={{ uri: imageUrl }} /> : <View style={styles.img} />;
}

export default BookImage;
