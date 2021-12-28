import React from 'react';
import { Pressable } from 'react-native';
import GenericText from '@app/components/GenericText';

import { styles } from './styles';
import { LABELS } from './constants';

interface Props {
  handleViewAll: () => void;
  hasMoreComments?: boolean;
}

const CommentsFooter = ({ handleViewAll, hasMoreComments }: Props) => {
  if (!hasMoreComments) return null;

  return (
    <Pressable onPress={handleViewAll}>
      <GenericText style={styles.viewAll}>{LABELS.viewAll}</GenericText>
    </Pressable>
  );
};

export default CommentsFooter;
