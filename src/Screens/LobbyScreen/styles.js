import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import { primaryColor, secondaryColor, borderRadius } from '../../theme';

export default StyleSheet.create({
  lobbyFormContainer: {
    flex: 1,
    marginTop: screenHeight / 18,
  },
  welcomeText: {
    textAlign: 'center',
  },
  lobbyListContainer: {
    marginBottom: screenHeight / 50,
  },
  lobbyContainer: {
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 20,
    marginRight: screenWidth / 20,
    borderRadius,
    borderColor: primaryColor,
    borderWidth: 1,
  },
  lobbyText: {
    color: secondaryColor,
    margin: screenWidth / 75,
  },
});
