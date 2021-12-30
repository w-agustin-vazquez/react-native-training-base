import React from 'react';
import { Route, routeNames } from '@app/components/Router/constants';
import Layout from '@app/components/Layout';
import { COMMENTS_MOCK } from '@constants/mockLongComments';

import BookInfo from './components/BookInfo';
import Comments from './components/Comments';

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { book } = route.params;

  return (
    <Layout>
      <BookInfo book={book} />
      <Comments comments={COMMENTS_MOCK} />
    </Layout>
  );
}

export default BookDetail;
