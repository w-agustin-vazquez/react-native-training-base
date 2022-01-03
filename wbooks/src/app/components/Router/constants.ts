import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/Library/screens/BookDetail';
import { IBook } from '@interfaces/book';
import Wishlist from '@app/screens/Wishlist';
import { ImageSourcePropType } from 'react-native';

import wishlistIc from '../../assets/img/ic_wishlist.png';
import libraryIc from '../../assets/img/ic_library.png';

export enum routeNames {
  library = 'Library',
  bookDetail = 'BookDetail',
  wishlist = 'Wishlist'
}

export type RootStackParamList = {
  [routeNames.library]: undefined;
  [routeNames.wishlist]: undefined;
  [routeNames.bookDetail]: { book: IBook };
};

export type Route<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  RouteName
>;

export const DEFAULT_MAIN_ROUTE = routeNames.library;

export interface IRoute {
  name: routeNames;
  title: string;
  icon?: ImageSourcePropType;
  component: React.FunctionComponent<any>;
  subPaths?: IRoute[];
}

export const ROUTES: IRoute[] = [
  {
    name: routeNames.library,
    title: 'Library',
    component: Library,
    icon: libraryIc,
    subPaths: [
      {
        name: routeNames.bookDetail,
        title: 'Book Detail',
        component: BookDetail
      }
    ]
  },
  {
    name: routeNames.wishlist,
    title: 'Wishlist',
    icon: wishlistIc,
    component: Wishlist
  }
];
