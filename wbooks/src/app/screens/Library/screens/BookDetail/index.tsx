import React from 'react';
import { View } from 'react-native';
import { Route, routeNames } from '@app/components/Router/constants';
// import { COMMENTS_MOCK } from '@constants/mockComments';

import BookInfo from './components/BookInfo';
import Layout from '@app/components/Layout';
// import Comments from './components/Comments';

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { book } = route.params;

  return (
    <Layout>
      <BookInfo book={book} />
      {/* TODO: Get comments from API or receive from a top level component */}
      {/* TODO: Add comments component in comments card */}
      {/* <Comments comments={COMMENTS_MOCK} /> */}
    </Layout>
  );
}

export default BookDetail;
