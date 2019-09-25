import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  mediumFontSize,
  primaryColor,
  smallFontSize,
  secondaryColor,
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
  activeUserText: {
    marginTop: screenHeight / 50,
    color: primaryColor,
    fontSize: smallFontSize,
  },
  assetImagesContainer: {
    flexDirection: 'row',
  },
  assetImage: {
    margin: screenWidth / 50,
    height: screenWidth / 5,
    width: screenWidth / 5,
  },
});
