import React from 'react';
import { FlatList, View } from 'react-native';

import { BOOKS_MOCK } from '@constants/mockBooks';
import GenericText from '@app/components/GenericText';
import { textVariants } from '@app/components/GenericText/constants';

import Book from './components/Book';

function Library() {
  return (
    <View>
      <GenericText variant={textVariants.h1}>My generic text with H1</GenericText>
      <GenericText variant={textVariants.h2}>My generic text with H2</GenericText>
      <GenericText variant={textVariants.h3}>My generic text with H3</GenericText>
      <GenericText variant={textVariants.h4}>My generic text with H4</GenericText>
      <GenericText variant={textVariants.p1}>My generic text with P1</GenericText>
      <GenericText variant={textVariants.p2}>My generic text with P2</GenericText>
      <GenericText variant={textVariants.p3}>My generic text with P3</GenericText>
      <GenericText variant={textVariants.p5}>My generic text with P5</GenericText>
      <FlatList
        data={BOOKS_MOCK}
        renderItem={({ item: { imageUrl, title, author, id } }) => (
          <Book key={id} imageUrl={imageUrl} title={title} author={author} />
        )}
      />
    </View>
  );
}

export default Library;
