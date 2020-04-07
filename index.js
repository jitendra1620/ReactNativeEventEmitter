/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'TabOne',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
                topBar:{
                  title:{
                    text: 'This is tab 1'
                  }
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'TabTwo',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
                topBar:{
                  title:{
                    text: 'This is tab 1'
                  }
                },
              },
            },
          },
        ],
      },
    },
  });
});
