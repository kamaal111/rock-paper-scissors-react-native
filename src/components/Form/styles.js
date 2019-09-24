import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';

export default StyleSheet.create({
  formContainer: {
    borderColor: '#000000',
    borderRadius: screenWidth / 50,
    borderWidth: 1,
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 5,
    marginRight: screenWidth / 5,
  },
  formText: {
    marginLeft: screenWidth / 75,
    marginTop: screenWidth / 75,
    color: '#0bd9c4',
    fontSize: screenHeight / 60,
  },
  form: {
    height: screenHeight / 30,
    paddingLeft: 10,
    fontSize: screenHeight / 60,
  },
  formSubmitContainer: {
    marginLeft: screenWidth / 2.5,
    marginRight: screenWidth / 2.5,
  },
  formSubmitText: {
    color: '#0bd9c4',
    fontSize: screenHeight / 50,
    textAlign: 'center',
  },
});
