/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TestApp from './TestApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TestApp);
// AppRegistry.registerComponent(appName, () => App);
