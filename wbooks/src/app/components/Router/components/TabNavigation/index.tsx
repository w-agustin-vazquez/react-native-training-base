import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IRoute } from '../../constants';
import InnerNavigation from '../InnerNavigation';
import Icon from '../Icon';

import { handleIconType, handleTabScreenOptions, routeNameBuilder, screenOptions } from './constants';

const Tab = createBottomTabNavigator();

interface Props {
  routes: IRoute[];
}

const TabNavigation = ({ routes }: Props) => {
  const handleTabIcon: handleIconType = (route, focused) => {
    const icon = routes.find(({ name }) => routeNameBuilder(name) === route.name)?.icon;
    return <Icon icon={icon} active={focused} />;
  };

  return (
    <Tab.Navigator screenOptions={({ route }) => handleTabScreenOptions(route, handleTabIcon)}>
      {routes.map(route => (
        <Tab.Screen key={route.name} name={routeNameBuilder(route.name)} options={screenOptions(route.title)}>
          {() => <InnerNavigation route={route} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
