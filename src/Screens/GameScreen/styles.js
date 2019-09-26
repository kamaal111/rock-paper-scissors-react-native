import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  mediumFontSize,
  primaryColor,
  secondaryColor,
  largeFontSize,
  borderRadius,
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
    color: primaryColor,
  },
  scoreText: {
    fontSize: largeFontSize,
    color: primaryColor,
  },
  activeUserText: {
    marginTop: screenHeight / 50,
    color: primaryColor,
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
    alignContent: 'center',
  },
  leaderBoardTextContainer: {
    borderRadius,
    borderColor: primaryColor,
    borderWidth: 1,
    marginTop: screenHeight / 50,
    marginRight: screenWidth / 10,
    marginLeft: screenWidth / 10,
  },
  leaderBoardText: {
    margin: screenHeight / 50,
    color: primaryColor,
    fontSize: mediumFontSize,
  },
});
