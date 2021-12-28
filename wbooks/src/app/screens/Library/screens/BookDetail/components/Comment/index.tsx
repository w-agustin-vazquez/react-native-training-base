import React from 'react';
import GenericText from '@app/components/GenericText';
import { IComment } from '@interfaces/comment';
import { Image, View } from 'react-native';
import BookImage from '@app/components/BookImage';

interface Props {
  author: IComment['author'];
  url: IComment['url'];
  text: IComment['text'];
}

const Comment = ({ author, url, text }: Props) => {
  return (
    <View>
      <BookImage imageUrl={url} style={{ width: 50, height: 50 }} />
      <GenericText>{author}</GenericText>
      <GenericText>{text}</GenericText>
    </View>
  );
};

export default Comment;
