import React from 'react';
import { View } from 'react-native';
import Button from '@app/components/Button';
import { buttonVariants } from '@app/components/Button/constants';
import GenericText from '@app/components/GenericText';
import { IBook } from '@interfaces/book';
import BookImage from '@app/components/BookImage';
import Card from '@app/components/Card';

import { styles } from './styles';
import { textVariants } from '@app/components/GenericText/constants';
import { LABELS } from './constants';

interface Props {
  book: IBook;
}

function BookInfo({ book }: Props) {
  const handleAddWishlist = () => console.warn('handleAddWishlist');
  const handleRent = () => console.warn('handleRent');

  return (
    <Card style={styles.bookInfo}>
      <BookImage style={styles.image} imageUrl={book.imageUrl} />
      <View style={styles.data}>
        <GenericText variant={textVariants.h1}>{book.title}</GenericText>
        <GenericText style={styles.status}>
          {LABELS.statusAvailable}
        </GenericText>
        <GenericText>{book.author}</GenericText>
        <GenericText>{book.year}</GenericText>
        <GenericText>{book.genre}</GenericText>
      </View>
      <Button
        style={styles.button}
        title={LABELS.addWishlist}
        handlePress={handleAddWishlist}
        variant={buttonVariants.secondary}
      />
      <Button
        style={styles.button}
        title={LABELS.rent} handlePress={handleRent} />
    </Card>
  );
}

export default BookInfo;
