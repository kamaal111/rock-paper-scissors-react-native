import { StyleSheet } from 'react-native';

import { screenHeight } from '../../dimensions';

export default StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    marginBottom: screenHeight / 50,
  },
});
