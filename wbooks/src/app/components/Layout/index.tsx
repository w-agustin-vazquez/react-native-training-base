import React, { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

export default Layout;
