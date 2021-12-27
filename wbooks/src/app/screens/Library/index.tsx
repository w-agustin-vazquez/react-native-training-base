import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Route, routeNames } from '@app/components/Router/constants';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { IBook } from '@interfaces/book';

import Book from './components/Book';
import { styles } from './styles';

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
    <View>
      <FlatList
        data={BOOKS_MOCK}
        // TODO: Move this to some layout component in card of library view
        style={styles.list}
        renderItem={handleRenderItem}
        keyExtractor={handleKeyExtractor}
      />
    </View>
  );
}

export default Library;
