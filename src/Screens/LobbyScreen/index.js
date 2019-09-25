import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

import { setNewLobby } from '../../actions/lobbies';
import { baseUrl } from '../../../config';
import LobbyForm from '../../components/LobbyForm';

import styles from './styles';

function LobbyScreen({ users, lobbies, setNewLobby: setNewLobbyAction }) {
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
            <LobbyForm io={io} setNewLobby={setNewLobbyAction} />
          </>
        )}
      </View>
      <View>
        {lobbies.lobbyList.length < 1 ? (
          <View>
            <Text>No lobbies</Text>
            <Text>Please create one to play</Text>
          </View>
        ) : (
          <>
            {lobbies.lobbyList.map(({ id, name, score }) => (
              <View key={id}>
                <Text>{name}</Text>
                <Text>{score}</Text>
                <Text>{`Players playing ${'0/2'}`}</Text>
              </View>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ users, lobbies }) => ({ users, lobbies });

export default connect(
  mapStateToProps,
  { setNewLobby },
)(LobbyScreen);
