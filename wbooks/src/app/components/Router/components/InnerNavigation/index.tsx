import { AppColors } from '@constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { IRoute } from '../../constants';

import { styles } from './styles';

interface Props {
  route: IRoute;
}

const Stack = createNativeStackNavigator();

const InnerNavigation = ({ route }: Props) => {
  const screenOptions = (title: string) => ({
    title,
    headerTintColor: AppColors.white,
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  });

  return (
    <Stack.Navigator initialRouteName={route.name}>
      <Stack.Screen
        key={route.name}
        name={route.name}
        component={route.component}
        options={screenOptions(route.title)}
      />
      {route.subPaths?.map(subPath => (
        <Stack.Screen
          key={subPath.name}
          name={subPath.name}
          component={subPath.component}
          options={screenOptions(subPath.title)}
        />
      ))}
    </Stack.Navigator>
  );
};

export default InnerNavigation;
