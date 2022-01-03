import { AppColors } from '@constants/colors';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';

export const screenOptions = (title: string) => ({
  title,
  headerShown: false
});

export const routeNameBuilder = (name: string) => `TAB${name}`;

export type handleIconType = (route: RouteProp<ParamListBase, string>, focused: boolean) => React.ReactNode;

export const handleTabScreenOptions = (
  route: RouteProp<ParamListBase, string>,
  handleTabIcon: handleIconType
): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => handleTabIcon(route, focused),
  tabBarActiveTintColor: AppColors.cerulean,
  tabBarInactiveTintColor: AppColors.dustyGray
});
