import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './Screens/WelcomeScreen';
import LobbyScreen from './Screens/LobbyScreen';
import GameScreen from './Screens/GameScreen';

const Views = {
  Welcome: { screen: WelcomeScreen },
  Lobby: { screen: LobbyScreen },
  Game: { screen: GameScreen },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }),
);
