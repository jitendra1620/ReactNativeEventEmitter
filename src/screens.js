import {Navigation} from 'react-native-navigation';
import TabOne from './TabOne';
import TabTwo from './TabTwo';

export function registerScreens() {
    Navigation.registerComponent('TabOne', () => TabOne);
    Navigation.registerComponent('TabTwo', () => TabTwo);
}