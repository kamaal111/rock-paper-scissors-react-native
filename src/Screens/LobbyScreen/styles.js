import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  primaryColor,
  secondaryColor,
  borderRadius,
  tertiaryColor,
  quaternaryColor,
} from '../../theme';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: secondaryColor,
  },
  lobbyFormContainer: {
    flex: 1,
    marginTop: screenHeight / 18,
  },
  welcomeText: {
    textAlign: 'center',
    color: tertiaryColor,
    fontSize: screenWidth / 25,
    fontWeight: '700',
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
    backgroundColor: quaternaryColor,
  },
  lobbyText: {
    color: tertiaryColor,
    margin: screenWidth / 75,
  },
});
