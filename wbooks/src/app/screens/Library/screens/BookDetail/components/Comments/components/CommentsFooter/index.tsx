import React from 'react';
import { TouchableOpacity } from 'react-native';
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
    <TouchableOpacity onPress={handleViewAll}>
      <GenericText style={styles.viewAll}>{LABELS.viewAll}</GenericText>
    </TouchableOpacity>
  );
};

export default CommentsFooter;
