import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  primaryColor,
  smallFontSize,
  mediumFontSize,
  borderRadius,
  tertiaryColor,
  quaternaryColor,
} from '../../theme';

export default StyleSheet.create({
  formContainer: {
    borderColor: primaryColor,
    borderRadius,
    borderWidth: 1,
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 5,
    marginRight: screenWidth / 5,
    backgroundColor: quaternaryColor,
  },
  formText: {
    marginLeft: screenWidth / 75,
    marginTop: screenWidth / 75,
    color: tertiaryColor,
    fontSize: smallFontSize,
  },
  form: {
    height: screenHeight / 30,
    paddingLeft: screenWidth / 60,
    fontSize: smallFontSize,
    color: tertiaryColor,
  },
  formSubmitContainer: {
    marginTop: screenHeight / 75,
    marginLeft: screenWidth / 2.5,
    marginRight: screenWidth / 2.5,
  },
  formSubmitText: {
    color: tertiaryColor,
    fontSize: mediumFontSize,
    textAlign: 'center',
  },
});
