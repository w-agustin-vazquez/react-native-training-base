/**
 * @format
 */

import { AppRegistry } from 'react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
