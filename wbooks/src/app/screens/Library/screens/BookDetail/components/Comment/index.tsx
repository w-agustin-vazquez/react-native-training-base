import React from 'react';
import GenericText from '@app/components/GenericText';
import { IComment } from '@interfaces/comment';
import { View } from 'react-native';
import BookImage from '@app/components/BookImage';
import { textVariants } from '@app/components/GenericText/constants';

import { styles } from './styles';

interface Props {
  author: IComment['author'];
  url: IComment['url'];
  text: IComment['text'];
}

const Comment = ({ author, url, text }: Props) => {
  return (
    <View style={styles.comment}>
      <BookImage imageUrl={url} style={styles.image} />
      <View style={styles.data}>
        <GenericText variant={textVariants.h4} style={styles.author}>
          {author}
        </GenericText>
        <GenericText>{text}</GenericText>
      </View>
    </View>
  );
};

export default Comment;
