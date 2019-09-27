import { StyleSheet } from 'react-native';

import { screenHeight } from '../../dimensions';
import { secondaryColor, tertiaryColor } from '../../theme';

export default StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: secondaryColor,
  },
  titleText: {
    textAlign: 'center',
    marginBottom: screenHeight / 50,
    color: tertiaryColor,
  },
});
