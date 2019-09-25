import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

import UsernameForm from '../../components/UsernameForm';

import { setUser } from '../../actions/users';

import styles from './styles';
import { baseUrl } from '../../../config';

function WelcomeScreen({ setUser: setUserAction, navigation }) {
  const io = socketIO(baseUrl);

  useEffect(() => {
    // eslint-disable-next-line no-console
    io.on('welcome-from-server', data => console.log(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.titleText}>🔥ROCK PAPER SCISSORS🔥</Text>
      <UsernameForm
        io={io}
        setUser={setUserAction}
        navigate={navigation.navigate}
      />
    </View>
  );
}

export default connect(
  null,
  { setUser },
)(WelcomeScreen);
