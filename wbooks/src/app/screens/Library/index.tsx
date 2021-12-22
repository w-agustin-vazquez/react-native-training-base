import React from 'react';
import { FlatList, View } from 'react-native';

import { BOOKS_MOCK } from '@constants/mockBooks';

import Book from './components/Book';
import { AppColors } from '@constants/colors';

function Library() {
  return (
    <View>
      <FlatList
        data={BOOKS_MOCK}
        // TODO: Move this to some layout component in card of library view
        style={{ backgroundColor: AppColors.polar, paddingTop: 20, paddingBottom: 20 }}
        renderItem={({ item: { imageUrl, title, author } }) => (
          <Book imageUrl={imageUrl} title={title} author={author} />
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
}

export default Library;
