import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';

export default StyleSheet.create({
  usernameFormContainer: {
    borderTopColor: '#000000',
    borderLeftColor: '#000000',
    borderRightColor: '#000000',
    borderBottomColor: '#000000',
    borderRadius: screenWidth / 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 5,
    marginRight: screenWidth / 5,
  },
  usernameFormText: {
    marginLeft: screenWidth / 75,
    marginTop: screenWidth / 75,
    color: '#0bd9c4',
    fontSize: screenHeight / 60,
  },
  usernameForm: {
    height: screenHeight / 30,
    paddingLeft: 10,
    fontSize: screenHeight / 60,
  },
  usernameFormSubmitContainer: {
    marginLeft: screenWidth / 2.5,
    marginRight: screenWidth / 2.5,
  },
  usernameFormSubmitText: {
    color: '#0bd9c4',
    fontSize: screenHeight / 50,
    textAlign: 'center',
  },
});
