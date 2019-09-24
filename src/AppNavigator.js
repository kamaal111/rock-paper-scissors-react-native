import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './Screens/WelcomeScreen';

const Views = {
  Welcome: { screen: WelcomeScreen },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'Welcome',
  }),
);
