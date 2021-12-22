import { AppColors } from '@constants/colors';
import React from 'react';

import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Library from './screens/Library';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* TODO: ScrollView will be removed? review in Library view card */}
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        <Library />
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default App;
