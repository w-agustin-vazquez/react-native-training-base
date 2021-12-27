import Button from '@app/components/Button';
import { buttonVariants } from '@app/components/Button/constants';
import GenericText from '@app/components/GenericText';
import { Route, routeNames } from '@app/components/Router/constants';
import React from 'react';
import { View } from 'react-native';

function BookDetail({ route }: Route<routeNames.bookDetail>) {
  const { id } = route.params;

  return (
    <View>
      <GenericText>BookDetail: {id}</GenericText>
      <Button handlePress={console.log} title="Primary btn" />
      <Button handlePress={console.log} title="Secondary btn" variant={buttonVariants.secondary} />
      <Button handlePress={console.log} title="Blank btn" variant={buttonVariants.blank} />
      <Button handlePress={console.log} title="Disabled btn" disabled />
    </View >
  );
}

export default BookDetail;
