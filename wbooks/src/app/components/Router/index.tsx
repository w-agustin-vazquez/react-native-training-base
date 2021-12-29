import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppColors } from '@constants/colors';

import { DEFAULT_MAIN_ROUTE, ROUTES } from './constants';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

function Router() {
  const screenOptions = (title: string) => ({
    title,
    headerTintColor: AppColors.white,
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={DEFAULT_MAIN_ROUTE}>
        {ROUTES.map(({ name, component, title }) => (
          <Stack.Screen key={name} name={name} component={component} options={screenOptions(title)} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
