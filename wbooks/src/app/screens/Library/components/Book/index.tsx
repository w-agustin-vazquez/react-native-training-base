import React from 'react';
import { View } from 'react-native';
import { IBook } from '@interfaces/book';
import GenericText from '@app/components/GenericText';
import { textVariants } from '@app/components/GenericText/constants';

import { styles } from './styles';
import BookImage from '../../../../components/BookImage';
import Card from '@app/components/Card';

interface Props {
  imageUrl: IBook['imageUrl'];
  title: IBook['title'];
  author: IBook['author'];
  handlePress: () => void;
}

function Book({ imageUrl, title, author, handlePress }: Props) {
  return (
    <Card style={styles.book} handlePress={handlePress}>
      <BookImage imageUrl={imageUrl} />
      <View style={styles.textContainer}>
        <GenericText variant={textVariants.h3} style={styles.title}>
          {title}
        </GenericText>
        <GenericText>{author}</GenericText>
      </View>
    </Card>
  );
}

export default Book;
