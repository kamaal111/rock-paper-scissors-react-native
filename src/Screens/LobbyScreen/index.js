import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

import { baseUrl } from '../../../config';
import LobbyForm from '../../components/LobbyForm';

import styles from './styles';

function LobbyScreen({ users }) {
  const io = socketIO(baseUrl);

  return (
    <ScrollView>
      <View style={styles.lobbyContainer}>
        {users.activeUser === null ? (
          <Text>Loading.........</Text>
        ) : (
          <>
            <Text
              style={styles.welcomeText}
            >{`Welcome ${users.activeUser.name}`}</Text>
            <LobbyForm />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(LobbyScreen);
