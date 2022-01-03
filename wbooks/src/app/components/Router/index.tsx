import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ROUTES } from './constants';
import TabNavigation from './components/TabNavigation';

function Router() {
  return (
    <NavigationContainer>
      <TabNavigation routes={ROUTES} />
    </NavigationContainer>
  );
}

export default Router;
