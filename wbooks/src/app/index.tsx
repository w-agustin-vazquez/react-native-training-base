import React from 'react';

import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Library from './screens/Library';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Library />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
