import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Route, routeNames } from '@app/components/Router/constants';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { IBook } from '@interfaces/book';
import Layout from '@app/components/Layout';

import Book from './components/Book';

function Library({ navigation }: Route<routeNames.library>) {
  const handleViewDetail = (item: IBook) => navigation.navigate(routeNames.bookDetail, { book: item });

  const handleRenderItem = ({ item }: ListRenderItemInfo<IBook>) => (
    <Book
      imageUrl={item.imageUrl}
      title={item.title}
      author={item.author}
      handlePress={() => handleViewDetail(item)}
    />
  );

  const handleKeyExtractor = ({ id }: IBook) => id.toString();

  return (
    <Layout>
      <FlatList data={BOOKS_MOCK} renderItem={handleRenderItem} keyExtractor={handleKeyExtractor} />
    </Layout>
  );
}

export default Library;
