import React from 'react';
import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import GenericText from '@app/components/GenericText';
import { IBook } from '@interfaces/book';
import { textVariants } from '@app/components/GenericText/constants';
import { AppColors } from '@constants/colors';

const IMG_STYLES: ImageStyle = {
  width: 40,
  height: 60,
  backgroundColor: AppColors.iron
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
  padding: 15,
  paddingLeft: 30,
  paddingRight: 30,
  margin: 20,
  marginTop: 10,
  marginBottom: 10,
  borderRadius: 8,
  backgroundColor: AppColors.white
}

const TEXT_CONTAINER_STYLES = {
  width: '70%',
  marginLeft: 20
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={BOOK_STYLES}>
      <BookImage imageUrl={imageUrl} />
      <View style={TEXT_CONTAINER_STYLES}>
        <GenericText variant={textVariants.h3}>{title}</GenericText>
        <GenericText>{author}</GenericText>
      </View>
    </View>
  );
}

export default Book;
