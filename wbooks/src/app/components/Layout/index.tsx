import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from './styles';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

export default Layout;
