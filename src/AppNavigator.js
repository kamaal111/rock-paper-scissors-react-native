import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './Screens/WelcomeScreen';
import LobbyScreen from './Screens/LobbyScreen';

const Views = {
  Welcome: { screen: WelcomeScreen },
  Lobby: { screen: LobbyScreen },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }),
);
