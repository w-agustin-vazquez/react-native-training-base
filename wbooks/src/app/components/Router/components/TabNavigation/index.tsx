import BookImage from '@app/components/BookImage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { IRoute } from '../../constants';
import InnerNavigation from '../InnerNavigation';

const Tab = createBottomTabNavigator();

interface Props {
  routes: IRoute[];
}

const TabNavigation = ({ routes }: Props) => {
  const screenOptions = (title: string) => ({
    title,
    headerShown: false
  });
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: () => {
          return <BookImage imageUrl="https://www.svgrepo.com/show/202548/cabbage.svg" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}>
      {routes.map(route => (
        <Tab.Screen key={route.name} name={`TAB${route.name}`} options={screenOptions(route.title)}>
          {() => <InnerNavigation route={route} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
