import React, { useMemo } from 'react';
import { Route, routeNames } from '@app/components/Router/constants';
import Layout from '@app/components/Layout';

import BookInfo from './components/BookInfo';
import { COMMENTS_MOCK } from '@constants/mockLongComments';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { IComment } from '@interfaces/comment';
import Comment from './components/Comment';
import GenericText from '@app/components/GenericText';
import Comments from './components/Comments';

const VISIBLE_COMMENTS = 5;

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { book } = route.params;
  // TODO: Replace it when integrate with API
  const comments = COMMENTS_MOCK;

  const hasMoreComments = useMemo(() => comments.length > VISIBLE_COMMENTS, [comments])

  const visibleComments = useMemo(
    () => comments.slice(Math.max(comments.length - VISIBLE_COMMENTS, 0)),
    [comments]
  );

  const handleRenderItem = ({
    item: { author, url, text }
  }: ListRenderItemInfo<IComment>) => (
    <Comment author={author} url={url} text={text} />
  );

  const handleKeyExtractor = ({ id }: IComment) => id.toString();

  return (
    <Layout>
      {/* <FlatList
        style={{ width: '90%' }}
        ListHeaderComponent={<BookInfo book={book} />}
        ListFooterComponent={hasMoreComments ? <GenericText>View All</GenericText> : null}
        renderItem={handleRenderItem}
        data={visibleComments}
        keyExtractor={handleKeyExtractor}
        numColumns={2}
        columnWrapperStyle={{ backgroundColor: 'red', width: '50%' }}
      /> */}
      <BookInfo book={book} />
      <Comments comments={COMMENTS_MOCK} />
    </Layout>
  );
}

export default BookDetail;
