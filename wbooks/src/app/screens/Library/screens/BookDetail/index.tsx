import React from 'react';
import { View } from 'react-native';
import GenericText from '@app/components/GenericText';
import { Route, routeNames } from '@app/components/Router/constants';

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { id } = route.params;

  return (
    <View>
      <GenericText>BookDetail: {id}</GenericText>
    </View>
  );
}

export default BookDetail;
