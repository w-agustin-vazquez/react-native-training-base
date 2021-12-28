import React, { useMemo } from 'react';
import { ListRenderItemInfo } from 'react-native';
import Card from '@app/components/Card';
import FlatListWrapper from '@app/components/FlatListWrapper';
import { IComment } from '@interfaces/comment';

import Comment from '../Comment';

import { styles } from './styles';
import CommentsFooter from './components/CommentsFooter';

interface Props {
  comments: IComment[];
}

const VISIBLE_COMMENTS = 5;

const Comments = ({ comments }: Props) => {
  const hasMoreComments = useMemo(() => comments.length > VISIBLE_COMMENTS, [comments]);

  const visibleComments = useMemo(
    () => comments.slice(Math.max(comments.length - VISIBLE_COMMENTS, 0)),
    [comments]
  );

  const handleRenderItem = ({ item: { author, url, text } }: ListRenderItemInfo<IComment>) => (
    <Comment author={author} url={url} text={text} />
  );

  const handleKeyExtractor = ({ id }: IComment) => id.toString();

  const handleViewAll = () => console.warn('handleViewAll');

  return (
    <Card style={styles.comments}>
      <FlatListWrapper
        ListFooterComponent={
          <CommentsFooter hasMoreComments={hasMoreComments} handleViewAll={handleViewAll} />
        }
        renderItem={handleRenderItem}
        data={visibleComments}
        keyExtractor={handleKeyExtractor}
        scrollEnabled={false}
      />
    </Card>
  );
};

export default Comments;
