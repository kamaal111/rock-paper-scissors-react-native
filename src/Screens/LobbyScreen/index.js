import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

import { baseUrl } from '../../../config';
import LobbyForm from '../../components/LobbyForm';
import { setNewLobby, getAllLobbies } from '../../actions/lobbies';

import styles from './styles';

function LobbyScreen({
  users,
  lobbies,
  setNewLobby: setNewLobbyAction,
  getAllLobbies: getAllLobbiesAction,
}) {
  const io = socketIO(baseUrl);

  useEffect(() => {
    io.emit('all-lobbies-request-from-client');
    io.on('all-lobbies-from-server', data => getAllLobbiesAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={styles.lobbyFormContainer}>
        {users.activeUser === null ? (
          <Text>Loading.........</Text>
        ) : (
          <>
            <Text style={styles.welcomeText}>
              {`Welcome ${users.activeUser.name}`}
            </Text>
            <LobbyForm io={io} setNewLobby={setNewLobbyAction} />
          </>
        )}
      </View>
      <View style={styles.lobbyListContainer}>
        {lobbies.lobbyList.length < 1 ? (
          <View>
            <Text>No lobbies</Text>
            <Text>Please create one to play</Text>
          </View>
        ) : (
          <>
            {lobbies.lobbyList.map(({ id, name, score }) => (
              <View key={id} style={styles.lobbyContainer}>
                <Text style={styles.lobbyText}>{name}</Text>
                <Text style={styles.lobbyText}>{score}</Text>
                <Text style={styles.lobbyText}>
                  {`Players playing ${'0/2'}`}
                </Text>
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
  { setNewLobby, getAllLobbies },
)(LobbyScreen);
