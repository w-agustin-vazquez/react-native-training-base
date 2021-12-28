import React, { useMemo } from 'react';
import { ListRenderItemInfo } from 'react-native';
import Card from '@app/components/Card';
import FlatListWrapper from '@app/components/FlatListWrapper';
import { IComment } from '@interfaces/comment';

import Comment from '../Comment';

import { styles } from './styles';
import CommentsFooter from './components/CommentsFooter';
import { useState } from 'react';

interface Props {
  comments: IComment[];
}

const VISIBLE_COMMENTS = 5;

const Comments = ({ comments }: Props) => {
  const [visibleComments, setVisibleComments] = useState(() =>
    comments.slice(Math.max(comments.length - VISIBLE_COMMENTS, 0))
  );

  const hasMoreComments = useMemo(
    () => comments.length > visibleComments.length,
    [visibleComments, comments]
  );

  const handleRenderItem = ({
    item: { author, url, text }
  }: ListRenderItemInfo<IComment>) => (
    <Comment author={author} url={url} text={text} />
  );

  const handleKeyExtractor = ({ id }: IComment) => id.toString();

  const handleViewAll = () => {
    const newComments = comments.filter(
      ({ id }) => !visibleComments.some(comment => comment.id === id)
    );
    setVisibleComments([...visibleComments, ...newComments]);
  };

  return (
    <Card style={styles.comments}>
      <FlatListWrapper
        ListFooterComponent={
          <CommentsFooter
            hasMoreComments={hasMoreComments}
            handleViewAll={handleViewAll}
          />
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
