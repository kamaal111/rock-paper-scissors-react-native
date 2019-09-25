import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  primaryColor,
  secondaryColor,
  smallFontSize,
  mediumFontSize,
  borderRadius,
} from '../../theme';

export default StyleSheet.create({
  formContainer: {
    borderColor: primaryColor,
    borderRadius,
    borderWidth: 1,
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 5,
    marginRight: screenWidth / 5,
  },
  formText: {
    marginLeft: screenWidth / 75,
    marginTop: screenWidth / 75,
    color: secondaryColor,
    fontSize: smallFontSize,
  },
  form: {
    height: screenHeight / 30,
    paddingLeft: 10,
    fontSize: smallFontSize,
  },
  formSubmitContainer: {
    marginLeft: screenWidth / 2.5,
    marginRight: screenWidth / 2.5,
  },
  formSubmitText: {
    color: secondaryColor,
    fontSize: mediumFontSize,
    textAlign: 'center',
  },
});
