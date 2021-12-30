import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

function Layout({ children }: PropsWithChildren<{}>) {
  return <View style={styles.container}>{children}</View>;
}

export default Layout;
