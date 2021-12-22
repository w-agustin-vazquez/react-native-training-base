import React from 'react';
import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import GenericText from '@app/components/GenericText';
import { IBook } from '@interfaces/book';

const IMG_STYLES: ImageStyle = {
  width: 70,
  height: 100,
  backgroundColor: 'gray'
};

function BookImage({ imageUrl }: { imageUrl: string | null }) {
  return imageUrl ? (
    <Image style={IMG_STYLES} source={{ uri: imageUrl }} />
  ) : (
    <View style={IMG_STYLES} />
  );
}

interface Props {
  imageUrl: IBook['imageUrl'];
  title: IBook['title'];
  author: IBook['author'];
}

const BOOK_STYLES: ViewStyle = {
  flexDirection: 'row',
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={BOOK_STYLES}>
      <BookImage imageUrl={imageUrl} />
      <View>
        <GenericText>{title}</GenericText>
        <GenericText>{author}</GenericText>
      </View>
    </View>
  );
}

export default Book;
