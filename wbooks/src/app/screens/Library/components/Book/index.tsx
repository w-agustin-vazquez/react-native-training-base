import React from 'react';
import { Image, View } from 'react-native';
import { IBook } from '@interfaces/book';
import GenericText from '@app/components/GenericText';
import { textVariants } from '@app/components/GenericText/constants';

import { styles } from './styles';

function BookImage({ imageUrl }: { imageUrl: string | null }) {
  return imageUrl ? <Image style={styles.img} source={{ uri: imageUrl }} /> : <View style={styles.img} />;
}

interface Props {
  imageUrl: IBook['imageUrl'];
  title: IBook['title'];
  author: IBook['author'];
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={styles.book}>
      <BookImage imageUrl={imageUrl} />
      <View style={styles.textContainer}>
        <GenericText variant={textVariants.h3} style={styles.title}>
          {title}
        </GenericText>
        <GenericText>{author}</GenericText>
      </View>
    </View>
  );
}

export default Book;
