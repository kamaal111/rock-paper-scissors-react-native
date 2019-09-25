import { StyleSheet } from 'react-native';

import { screenHeight } from '../../dimensions';
import {
  mediumFontSize,
  primaryColor,
  smallFontSize,
  secondaryColor,
} from '../../theme';

export default StyleSheet.create({
  gameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight / 20,
    backgroundColor: secondaryColor,
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
});
