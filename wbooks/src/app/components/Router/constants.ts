import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/Library/screens/BookDetail';

export enum routeNames {
  library = 'Library',
  bookDetail = 'BookDetail'
}

export const DEFAULT_MAIN_ROUTE = routeNames.library;

export const ROUTES = [
  {
    name: routeNames.library,
    component: Library
  },
  {
    name: routeNames.bookDetail,
    component: BookDetail
  }
];

export type RootStackParamList = {
  [routeNames.library]: undefined;
  [routeNames.bookDetail]: { id: number };
};

export type Route<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  RouteName
>;
