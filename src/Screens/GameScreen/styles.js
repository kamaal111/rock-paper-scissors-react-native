import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  mediumFontSize,
  primaryColor,
  secondaryColor,
  largeFontSize,
  borderRadius,
  tertiaryColor,
  quaternaryColor,
} from '../../theme';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
  gameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight / 20,
  },
  gameTitle: {
    fontSize: mediumFontSize,
    color: tertiaryColor,
  },
  scoreText: {
    fontSize: largeFontSize,
    color: tertiaryColor,
  },
  activeUserText: {
    marginTop: screenHeight / 50,
    color: tertiaryColor,
    fontSize: mediumFontSize,
  },
  assetImagesContainer: {
    flexDirection: 'row',
  },
  assetImage: {
    margin: screenWidth / 50,
    height: screenWidth / 5,
    width: screenWidth / 5,
  },

  leaderBoardContainer: {
    marginTop: screenHeight / 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderBoardTextContainer: {
    borderRadius,
    borderColor: primaryColor,
    borderWidth: 1,
    marginTop: screenHeight / 50,
    marginRight: screenWidth / 10,
    marginLeft: screenWidth / 10,
    backgroundColor: quaternaryColor,
  },
  leaderBoardText: {
    marginTop: screenHeight / 75,
    marginBottom: screenHeight / 75,
    marginLeft: screenHeight / 50,
    marginRight: screenHeight / 50,
    color: tertiaryColor,
    fontSize: mediumFontSize,
  },
  lossOrWinAndTitleText: {
    fontSize: mediumFontSize,
    color: tertiaryColor,
    marginTop: screenHeight / 50,
  },
  backToLobbyButton: {
    color: tertiaryColor,
    fontSize: mediumFontSize,
  },
});
