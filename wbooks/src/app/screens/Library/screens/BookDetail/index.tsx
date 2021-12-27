import React from 'react';
import { View } from 'react-native';
import { Route, routeNames } from '@app/components/Router/constants';
// import { COMMENTS_MOCK } from '@constants/mockComments';

import BookInfo from './components/BookInfo';
// import Comments from './components/Comments';

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { book } = route.params;

  return (
    <View>
      <BookInfo book={book} />
      {/* TODO: Get comments from API or receive from a top level component */}
      {/* TODO: Add comments component in comments card */}
      {/* <Comments comments={COMMENTS_MOCK} /> */}
    </View >
  );
}

export default BookDetail;
