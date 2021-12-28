import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Route, routeNames } from '@app/components/Router/constants';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { IBook } from '@interfaces/book';
import Layout from '@app/components/Layout';
import FlatListWrapper from '@app/components/FlatListWrapper';

import Book from './components/Book';

function Library({ navigation }: Route<routeNames.library>) {
  const handleRenderItem = ({ item }: ListRenderItemInfo<IBook>) => (
    <Book
      imageUrl={item.imageUrl}
      title={item.title}
      author={item.author}
      handlePress={() => navigation.navigate(routeNames.bookDetail, { book: item })}
    />
  );

  const handleKeyExtractor = ({ id }: IBook) => id.toString();

  return (
    <Layout>
      <FlatListWrapper
        data={BOOKS_MOCK}
        renderItem={handleRenderItem}
        keyExtractor={handleKeyExtractor}
        scrollEnabled={false}
      />
    </Layout>
  );
}

export default Library;
