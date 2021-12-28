import FlatListWrapper from '@app/components/FlatListWrapper';
import GenericText from '@app/components/GenericText';
import { IComment } from '@interfaces/comment';
import React, { useMemo } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import Comment from '../Comment';

interface Props {
  comments: IComment[]
}

const VISIBLE_COMMENTS = 5;

const Comments = ({ comments }: Props) => {
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
    <FlatListWrapper
      ListFooterComponent={hasMoreComments ? <GenericText>View All</GenericText> : null}
      renderItem={handleRenderItem}
      data={visibleComments}
      keyExtractor={handleKeyExtractor}
      scrollEnabled={false}
    />
  )
}

export default Comments
