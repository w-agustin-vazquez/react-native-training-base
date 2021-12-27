import React from 'react';
import { Image, View } from 'react-native';
import Button from '@app/components/Button';
import { buttonVariants } from '@app/components/Button/constants';
import GenericText from '@app/components/GenericText';
import { IBook } from '@interfaces/book';
import BookImage from '@app/screens/Library/components/Book/components/BookImage';
import Card from '@app/components/Card';

import { styles } from './styles';

interface Props {
  book: IBook;
}

function BookInfo({ book }: Props) {
  const handleAddWishlist = () => console.warn('handleAddWishlist');
  const handleRent = () => console.warn('handleRent');

  return (
    <Card>
      <BookImage imageUrl={book.imageUrl} />
      <View>
        <GenericText>{book.title}</GenericText>
        <GenericText>Available</GenericText>
        <GenericText>{book.author}</GenericText>
        <GenericText>{book.year}</GenericText>
        <GenericText>{book.genre}</GenericText>
      </View>
      <View>
        <Button title="ADD TO WISHLIST" handlePress={handleAddWishlist} variant={buttonVariants.secondary} />
        <Button title="RENT" handlePress={handleRent} />
      </View>
    </Card>
  );
}

export default BookInfo;
